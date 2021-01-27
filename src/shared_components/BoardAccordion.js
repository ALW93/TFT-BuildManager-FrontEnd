import React from "react";
import { IMG_API } from "../config";
import { useSelector } from "react-redux";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ViewBoard from "../View/ViewBoard";
import ActionButtons from "./BoardButtons";
import SynergyPreview from "./SynergyPreview";
import guideIcon from "../Assets/guide.svg";

export default function BoardAccordion({ boards, type }) {
  const user = useSelector((state) => state.authentication.user);

  return (
    <div>
      {boards &&
        Object.keys(boards).map((e) => {
          return (
            <div className="flex">
              <Accordion
                style={{
                  backgroundImage: `url(${IMG_API}/${boards[e].grid[
                    boards[e].grid.length - 1
                  ].id.slice(5)}.jpg)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "40%",
                  backgroundPosition: "right 23%",
                  margin: "2px",
                  border: "2px solid #9E6C36",
                  minWidth: "90%",
                }}
              >
                <AccordionSummary>
                  <div>
                    <div className="flex">
                      <div>
                        <h2 style={{ color: "#9E6C36" }}>{boards[e].title}</h2>
                        <h3>{boards[e].subtitle}</h3>
                      </div>
                      <SynergyPreview synergies={boards[e].actives} />
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <ViewBoard data={boards[e].grid} />
                </AccordionDetails>
              </Accordion>
              <div>
                <ActionButtons
                  user={user}
                  boardId={e}
                  data={boards[e]}
                  type={type}
                />
                {boards[e].feature_count ? (
                  <img src={guideIcon} style={{ width: "30px" }} />
                ) : null}
              </div>
            </div>
          );
        })}
    </div>
  );
}
