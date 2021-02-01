import React, { useState, createRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ViewBoard from "./ViewBoard";
import { Button } from "@material-ui/core";
import { TFT_BASE } from "../config";

//#region
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgb(255, 243, 228)",
    borderRadius: "5px",
    height: "100%",
    padding: "10px",
    display: "flex",
    width: "100%",
    height: "fit-content",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  content: {
    height: "62vh",
  },
}));
//#endregion

export default function BoardCarousel({ main, subs, guide, editor, buildId }) {
  const quill = createRef();
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [content, setContent] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(updateGuide(buildId, { content: "test" }));
    const sendUpdate = async () => {
      const response = await fetch(`${TFT_BASE}/boards/id/${buildId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: content }),
      });
      console.log(response);
    };
    sendUpdate();
  }, [content]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const updateGuide = () => {
    const target = quill.current.getEditor();
    const content = target.editor.delta.ops;
    setContent(content);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        <Tab label="Guide" disable={true} />
        <Tab label="Final Board" />

        {subs &&
          subs.map((e) => {
            return <Tab label={e.title} />;
          })}
      </Tabs>
      {editor ? (
        <TabPanel className={classes.content} value={value} index={0}>
          <ReactQuill value={guide} ref={quill}>
            <div
              style={{ width: "40vw", fontSize: "larger", height: "52vh" }}
            ></div>
          </ReactQuill>
          <Button
            variant="contained"
            color="primary"
            onClick={() => updateGuide()}
          >
            Submit
          </Button>
          <Button variant="contained" color="secondary">
            Cancel
          </Button>
        </TabPanel>
      ) : (
        <TabPanel className={classes.content} value={value} index={0}>
          {guide ? (
            <ReactQuill value={guide} readOnly={true} theme="bubble">
              <div
                style={{ width: "40vw", fontSize: "larger", height: "52vh" }}
              ></div>
            </ReactQuill>
          ) : (
            "No Guide Available"
          )}
        </TabPanel>
      )}

      <TabPanel value={value} index={1}>
        <ViewBoard data={main} />
      </TabPanel>
      {subs &&
        subs.map((e, idx) => {
          return (
            <TabPanel value={value} index={idx + 2}>
              <ViewBoard data={e.grid} />
            </TabPanel>
          );
        })}
    </div>
  );
}
