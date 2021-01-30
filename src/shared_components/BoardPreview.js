import React, { useState } from "react";
import ViewBoard from "../View/ViewBoard";
import { useSelector } from "react-redux";
import ActionButtons from "./BoardButtons";
import SynergyPreview from "./SynergyPreview";
import Grow from "@material-ui/core/Grow";
import guideIcon from "../Assets/guide.svg";

const BoardPreview = ({ id, data }) => {
  const user = useSelector((state) => state.authentication.user);
  const [toggle, setToggle] = useState(false);

  const toggleView = () => {
    let prev = toggle;
    setToggle(!prev);
  };

  return (
    <div>
      <div
        onClick={toggleView}
        style={{
          margin: "2px",
          border: "2px solid #9E6C36",
          minWidth: "90%",
          background: "white",
        }}
      >
        {data ? (
          <div className="flex">
            <ActionButtons user={user} boardId={id} data={data} />
            <div>
              <h2 style={{ color: "#9E6C36" }}>{data.title}</h2>
              <h3>{data.subtitle}</h3>
            </div>
            <SynergyPreview synergies={data.actives} />
            {data.grid.map((e) => {
              return (
                <img
                  src={require(`../Assets/champions/${e.id}.png`)}
                  style={{
                    width: "40px",
                    height: "40px",
                    margin: "1px",
                    borderRadius: "5px",
                    border: "1px solid black",
                  }}
                />
              );
            })}
          </div>
        ) : null}
        {toggle ? (
          <Grow direction="down" in={toggle} mountOnEnter unmountOnExit>
            <div
              style={{
                fontSize: "0.9em",
              }}
            >
              <ViewBoard data={data.grid} />
            </div>
          </Grow>
        ) : null}
      </div>
    </div>
  );
};

export default BoardPreview;
