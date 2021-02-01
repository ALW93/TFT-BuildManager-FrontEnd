import React from "react";
import { Radio } from "@material-ui/core";
import "./Builder.css";

export const ItemPool = ({ items }) => {
  const itemDragStart = (e, itemId) => {
    console.log("itemStart", itemId);
    e.dataTransfer.setData("itemId", itemId);
    e.dataTransfer.setData("type", "item");
  };

  return (
    <>
      <div className="item__selection">
        {items &&
          items.map((item) => {
            const ref = item.image;
            return (
              <>
                <img
                  onDragStart={(e) => itemDragStart(e, item.acronym)}
                  draggable={true}
                  src={require(`../Assets/items/${ref}`)}
                />
              </>
            );
          })}
      </div>
    </>
  );
};

export const SelectionPool = ({
  champions,
  onDragOver,
  onDropDelete,
  onDragStart,
}) => {
  return (
    <div>
      <div
        className="character__selection"
        onDragOver={onDragOver}
        onDrop={onDropDelete}
      >
        {champions.map((champion, index) => {
          return (
            <img
              onDragStart={(e) => onDragStart(e, champion.championId, null)}
              draggable
              className={`border${champion.cost}`}
              src={require(`../Assets/champions/${champion.championId}.png`)}
            />
          );
        })}
      </div>
    </div>
  );
};

export const GUI = ({ filter, setFilter }) => {
  const costs = {
    None: "",
    One: "1",
    Two: "2",
    Three: "3",
    Four: "4",
    Five: "5",
  };

  const costHandler = (e) => setFilter({ ...filter, cost: e.target.value });
  const traitHandler = (e) => setFilter({ ...filter, trait: e.target.value });

  return (
    <div>
      {Object.keys(costs).map((cost) => {
        return (
          <>
            <Radio
              checked={filter.cost === costs[cost]}
              onChange={costHandler}
              value={costs[cost]}
              name="radio-button-demo"
            />
            <label className="glowHead">{cost}</label>
          </>
        );
      })}
    </div>
  );
};
