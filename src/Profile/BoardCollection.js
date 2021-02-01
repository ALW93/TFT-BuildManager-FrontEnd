import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BoardPreview from "../shared_components/BoardPreview";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "rgb(255, 207, 148)",
    textShadow: "0 0 3px rgb(210, 123, 17)",
  },
}));

const BoardCollection = () => {
  const boards = useSelector((state) => state.info.boards);
  const user = useSelector((state) => state.authentication.user);
  const [shown, setShown] = useState(boards || null);
  const classes = useStyles();
  useEffect(() => {
    setShown(boards);
  }, [boards]);

  const filterOwn = () => {
    const filtered = {};
    Object.keys(boards).forEach((e) => {
      if (boards[e].authorId === user.id) filtered[e] = boards[e];
    });
    console.log(filtered);
    setShown(filtered);
  };

  return (
    <div>
      <h1 className="glowHead">Collection</h1>
      <div className="flex" style={{ justifyContent: "center" }}>
        <Button className={classes.input} onClick={() => setShown(boards)}>
          Show All
        </Button>
        <Button className={classes.input} onClick={filterOwn}>
          My Boards
        </Button>
      </div>
      {Object.keys(shown).length ? (
        <>
          {Object.keys(shown).map((e) => (
            <BoardPreview id={e} data={shown[e]} />
          ))}
        </>
      ) : (
        <h3 className="glowHead" style={{ marginTop: "10%" }}>
          None Found
        </h3>
      )}
    </div>
  );
};

export default BoardCollection;
