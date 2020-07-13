import React, { useState } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { makeStyles } from "@material-ui/core/styles";

const options = ["Region", "District", "Township"];

const useStyles = makeStyles((theme) => ({
  filterText: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const FilterMenu = ({ selectedIndex, handleMenuItemClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <List component="nav" aria-label="Filter tags">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="set filter"
          onClick={handleClickListItem}
        >
          <ListItemText
            className={classes.filterText}
            primary="Set Filter"
          ></ListItemText>
          <ArrowDropDownIcon />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default FilterMenu;
