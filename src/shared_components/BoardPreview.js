import React, { useState } from "react";
import ViewBoard from "../View/ViewBoard";
import { useSelector } from "react-redux";
import ActionButtons from "./BoardButtons";
import SynergyPreview from "./SynergyPreview";
import "./BoardPreview.css";
import Grow from "@material-ui/core/Grow";
import { itemRef } from "../set4update/set4";
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
      <div onClick={toggleView} className="Preview">
        {data ? (
          <div className="flex">
            <ActionButtons user={user} boardId={id} data={data} />
            <div>
              <SynergyPreview synergies={data.actives} />
              <h2 className="goldHead">{data.title}</h2>
              <h3>{data.subtitle}</h3>
            </div>
            {data.grid.map((e) => {
              return (
                <div>
                  <img
                    src={require(`../Assets/champions/${e.id}.png`)}
                    className="champPreview"
                  />
                  <div className="flex">
                    {e.items
                      ? e.items.map((e) => (
                          <img
                            src={require(`../Assets/items/${itemRef[e].image}`)}
                            className="itemPreview"
                          />
                        ))
                      : null}
                  </div>
                </div>
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
