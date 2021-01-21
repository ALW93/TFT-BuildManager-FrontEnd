import React from "react";
import { IMG_API } from "../config";
import { useSelector } from "react-redux";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ViewBoard from "../View/ViewBoard";
import ActionButtons from "./BoardButtons";

export default function BoardAccordion({ boards, type }) {
  const user = useSelector((state) => state.authentication.user);

  return (
    <div>
      {boards &&
        Object.keys(boards).map((e) => {
          return (
            <div>
              <ActionButtons
                user={user}
                boardId={e}
                data={boards[e]}
                type={type}
              />

              <Accordion
                style={{
                  backgroundImage: `url(${IMG_API}/${boards[e].grid[
                    boards[e].grid.length - 1
                  ].id.slice(5)}.jpg)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "37%",
                  backgroundPosition: "right 23%",
                  backdropFilter: "blur(10px)",
                }}
              >
                <AccordionSummary>
                  <h1>{boards[e].title}</h1>
                  <h2>{boards[e].subtitle}</h2>
                </AccordionSummary>
                <AccordionDetails>
                  <ViewBoard data={boards[e].grid} />
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
    </div>
  );
}
