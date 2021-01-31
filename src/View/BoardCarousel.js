import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ViewBoard from "./ViewBoard";
import GuideBuilder from "../GuideBuilder/GuideBuilder";

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

export default function VerticalTabs({ main, subs, guide, owner }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
