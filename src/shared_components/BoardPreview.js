import React, { useState } from "react";
import ViewBoard from "../View/ViewBoard";
import { useSelector } from "react-redux";
import ActionButtons from "./BoardButtons";
import SynergyPreview from "./SynergyPreview";
import guideIcon from "../Assets/guide.svg";

const BoardPreview = ({ boards }) => {
  const user = useSelector((state) => state.authentication.user);
  const [toggle, setToggle] = useState(false);

  const toggleView = () => {
    let prev = toggle;
    setToggle(!prev);
  };

  return (
    <div>
      {boards &&
        Object.keys(boards).map((e) => {
          return (
            <div className="flex">
              <div
                onClick={toggleView}
                style={{
                  margin: "2px",
                  border: "2px solid #9E6C36",
                  minWidth: "90%",
                  background: "white",
                }}
              >
                <div>
                  <div>
                    <div className="flex">
                      <ActionButtons user={user} boardId={e} data={boards[e]} />
                      <div>
                        <h2 style={{ color: "#9E6C36" }}>{boards[e].title}</h2>
                        <h3>{boards[e].subtitle}</h3>
                      </div>
                      <SynergyPreview synergies={boards[e].actives} />
                      {boards[e].grid.map((e) => {
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
                  </div>
                </div>
                {toggle ? (
                  <div
                    style={{
                      fontSize: "0.9em",
                    }}
                  >
                    <ViewBoard data={boards[e].grid} />
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BoardPreview;
