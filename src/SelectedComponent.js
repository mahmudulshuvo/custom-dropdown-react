import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";

const SelectedComponent = ({ classes, selected, handleDelete }) => {
  return (
    <div className={classes.root}>
      <Paper style={{ width: 360 }}>
        <Typography
          component="p"
          style={{ textAlign: "center", paddingTop: 10 }}
        >
          Selected Item
        </Typography>
        <div style={{ display: "flex", flexDirection: "column", margin: 10 }}>
          {selected.map(value => {
            return (
              <div className={classes.root} key={value.label}>
                <Chip
                  label={value.label}
                  onDelete={handleDelete(value)}
                  style={{ marginBottom: 10 }}
                />
              </div>
            );
          })}
        </div>
      </Paper>
    </div>
  );
};

export default SelectedComponent;
