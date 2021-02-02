import React, { useState, useEffect } from "react";
import { SelectionPool, GUI, ItemPool } from "./Tools";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Node from "./Node";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { champions as champPool } from "../set4update/set4";
import { items as itemPool } from "../set4/set4";
import "./Builder.css";
import Synergies from "./Synergies";
import { createBoard, createSub } from "../store/actions/board";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "rgb(255, 207, 148)",
    textShadow: "0 0 3px rgb(210, 123, 17)",
  },
  textfield: {
    borderRadius: "5px",
    opacity: 0.5,
    height: "20px",
    fontSize: "20px",
  },
}));

const NewBuilder = ({ type }) => {
  const classes = useStyles();
  const prevId = useParams();
  //#region
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [actives, setActives] = useState({});
  const [pool, setPool] = useState(champPool);
  const [filter, setFilter] = useState({ cost: null, trait: null });
  const [synergies, setSynergies] = useState({});
  const [board, setBoard] = useState(() => {
    const object = {};
    const spaces = Array(28).fill(null);
    spaces.map((_, index) => {
      object[index] = null;
    });
    return object;
  });

  const submitBuild = async () => {
    let reduced = Object.keys(board)
      .map((e, index) => {
        if (board[e]) {
          return { ...board[e], position: index };
        }
      })
      .filter((i) => i);
    const info = {
      authorId: user.id,
      grid: reduced,
      actives: actives,
      title: title || "Untitled Board",
      subtitle: subtitle,
    };
    if (type === "normal") {
      const data = await dispatch(createBoard(info));
      const id = await data.id;
      history.push(`/board/id/${id}`);
    } else {
      await dispatch(createSub({ ...info, boardId: prevId.id }));
      history.push(`/board/id/${prevId.id}`);
    }
  };

  // *** Grabs Synergies for Current Board ***
  useEffect(() => {
    const synergies = {};
    const team = Object.values(board)
      .map((e) => (e ? e.id : null))
      .filter((i) => i);
    champPool.map((champ) => {
      if (team.includes(champ.championId)) {
        champ.traits.forEach((trait) => {
          if (!synergies[trait]) {
            synergies[trait] = 1;
          } else {
            synergies[trait]++;
          }
        });
      }
    });
    setSynergies(synergies);
  }, [board]);

  // *** Toggles Database Retrieval of Champion Pool ***
  useEffect(() => {
    (async () => {
      let data = champPool;
      if (filter.cost && !filter.trait) {
        return setPool(data.filter((e) => e.cost === parseInt(filter.cost)));
      }
      if (!filter.cost && filter.trait) {
        return setPool(data.filter((e) => e.trait.includes(filter.trait)));
      }
      if (filter.cost && filter.trait) {
        return setPool(
          data.filter(
            (e) =>
              e.cost === parseInt(filter.cost) && e.trait.includes(filter.trait)
          )
        );
      }
      setPool(data);
    })();
  }, [filter]);

  const onDragStart = (e, id, space) => {
    console.log("dragstart:", id, space);
    e.dataTransfer.setData("id", id);
    e.dataTransfer.setData("oldSpot", space);
    if (space && board[space].items) {
      e.dataTransfer.setData("items", board[space].items);
    }
    e.dataTransfer.setData("type", "champion");
  };

  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDrop = (ev, position) => {
    const occupant = board[position];
    const oldSpot = ev.dataTransfer.getData("oldSpot");
    const id = ev.dataTransfer.getData("id");
    const items = ev.dataTransfer.getData("items");
    const itemId = ev.dataTransfer.getData("itemId");
    const type = ev.dataTransfer.getData("type");
    const newBoard = board;

    if (type === "champion") {
      if (board[oldSpot]) {
        const temp = board;
        temp[oldSpot] = null;
        setBoard({ ...temp });
      }
      if (items.length) {
        newBoard[position] = { id: id, items: items.split(",") };
      } else {
        newBoard[position] = { id: id };
      }
      if (occupant && oldSpot !== "null") {
        newBoard[oldSpot] = occupant;
      }
      setBoard({ ...newBoard });
    }

    if (type === "item") {
      if (board[position]) {
        if (newBoard[position]["items"]) {
          if (newBoard[position]["items"].length === 3) return;
          newBoard[position]["items"].push(itemId);
        } else {
          newBoard[position]["items"] = [itemId];
        }
        setBoard({ ...newBoard });
      } else {
        console.log("no champion"); // TODO: Alert User No Champion
      }
    }
  };

  // *** Removes Champion from Board ***
  const onDropDelete = (e) => {
    const oldSpot = e.dataTransfer.getData("oldSpot");
    if (board[oldSpot]) {
      const temp = board;
      temp[oldSpot] = null;
      setBoard({ ...temp });
    }
  };
  //#endregion

  // *** Clears Board Content ***
  const clearBoard = () => {
    setBoard(() => {
      const object = {};
      const spaces = Array(28).fill(null);
      spaces.map((_, index) => {
        object[index] = null;
      });
      return object;
    });
  };

  return (
    <div className="Builder__Container">
      <div className="flex" style={{ justifyContent: "center" }}>
        <div>
          <label className="glowHead">Title</label>
          <input
            className={classes.textfield}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="glowHead">Description</label>
          <input
            className={classes.textfield}
            label="Description"
            type="text"
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>
      </div>
      {type === "normal" ? (
        <>
          <Button className={classes.input} onClick={submitBuild}>
            Submit
          </Button>
          <Button className={classes.input} onClick={clearBoard}>
            Clear
          </Button>
        </>
      ) : null}

      {type === "subboard" ? (
        <>
          <Button className={classes.input} onClick={submitBuild}>
            Add to Guide
          </Button>
          <Button className={classes.input} onClick={() => history.goBack()}>
            Cancel
          </Button>
        </>
      ) : null}

      <div className="Builder__Container--Top">
        <div className="synergy-gallery">
          <h2 className="glowHead">Synergies</h2>
          <Synergies
            data={synergies}
            setActives={setActives}
            actives={actives}
          />
        </div>
        <div className="middle">
          {type === "normal" ? (
            <h2 className="glowHead">Create a Board</h2>
          ) : (
            <h2 className="glowHead">Add a Board</h2>
          )}
          <div className="hexagon-gallery">
            {Object.keys(board).map((node) => {
              return (
                <Node
                  champion={board[node]}
                  onDragOver={onDragOver}
                  onDragStart={onDragStart}
                  onDrop={onDrop}
                  position={node}
                />
              );
            })}
          </div>
        </div>
        <div className="itemPool">
          <h2 className="glowHead">Items</h2>
          <ItemPool items={itemPool} />
        </div>
      </div>
      <div className="Builder__Container--Bottom">
        <GUI filter={filter} setFilter={setFilter} />
        <SelectionPool
          champions={pool}
          onDragOver={onDragOver}
          onDropDelete={onDropDelete}
          onDragStart={onDragStart}
        />
      </div>
    </div>
  );
};

export default NewBuilder;
