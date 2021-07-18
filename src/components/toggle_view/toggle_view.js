import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import TableChartIcon from "@material-ui/icons/TableChart";
import BarChartIcon from "@material-ui/icons/BarChart";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useDispatch, useSelector } from "react-redux";
import { set_view } from "../../actions/set_view";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ToggleView() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const view = useSelector((state) => state.view);

  const handleChange = (event, new_value) => {
    dispatch(set_view(new_value));
  };

  return (
    <div className="tabs_container">
      <Paper square className={classes.root}>
        <Tabs
          value={view}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example"
        >
          <Tab icon={<TableChartIcon />} aria-label="phone" />
          <Tab icon={<BarChartIcon />} aria-label="favorite" />
        </Tabs>
      </Paper>
    </div>
  );
}
