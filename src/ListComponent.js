import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ListComponent = ({ classes, defaultItems, handleToggle, checked }) => {
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>List Items</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List className={classes.root}>
            {defaultItems.map(item => {
              const labelId = `checkbox-list-label-${item.label}`;

              return (
                <ListItem
                  key={item.label}
                  role={undefined}
                  dense
                  button
                  onClick={handleToggle(item)}
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(item) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`${item.label}`} />
                </ListItem>
              );
            })}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default ListComponent;
