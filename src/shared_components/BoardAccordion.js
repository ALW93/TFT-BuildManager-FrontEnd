import React from "react";
import { IMG_API } from "../config";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ViewBoard from "../View/ViewBoard";

export default function BoardAccordion({ boards, type }) {
  return (
    <div>
      {boards &&
        boards.map((e) => {
          return (
            <div>
              {type === "general" ? (
                <>
                  <button>Save</button>
                  <button>Open Guide</button>
                </>
              ) : (
                <button>Remove from Collection</button>
              )}

              <Accordion
                style={{
                  backgroundImage: `url(${IMG_API}/${e.grid[0].id.slice(5)})`,
                }}
              >
                <AccordionSummary>
                  <h1>{e.title}</h1>
                  <h2>{e.subtitle}</h2>
                </AccordionSummary>
                <AccordionDetails>
                  <ViewBoard data={e.grid} />
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
    </div>
  );
}
