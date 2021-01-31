import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ViewBoard from "./ViewBoard";
import NewBuilder from "../NewBuilder/NewBuilder";
import Dialog from "@material-ui/core/Dialog";

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

    padding: "10px",
    display: "flex",
    width: "100%",
    height: "fit-content",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs({ main, subs, guide }) {
  const user = useSelector((state) => state.authentication.user);
  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  const [builder, showBuilder] = useState(false);

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
      <TabPanel value={value} index={0}>
        Guide
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
