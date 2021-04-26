import React from "react";
import { Drawer, Divider, IconButton } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import ReorderIcon from "@material-ui/icons/Reorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "@reach/router";
const Drawer1 = (props) => {
  return (
    <div>
      <Drawer variant="temporary" open={props.open} anchor="right">
        {props.children}
      </Drawer>
    </div>
  );
};
export default Drawer1;
