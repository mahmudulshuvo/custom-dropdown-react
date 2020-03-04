import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import ListComponent from "./ListComponent";
import SelectedComponent from "./SelectedComponent";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const defaultItems = [
  { label: "Item A", value: "Value A" },
  { label: "Item B", value: "Value B" },
  { label: "Item C", value: "Value C" },
  { label: "Item D", value: "Value D" },
];

function App() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [showPrint, setPrint] = React.useState(false);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleDelete = value => () => {
    let index = selected.indexOf(value);
    selected.splice(index, 1);
    setSelected(selected);
    index = checked.indexOf(value);

    if (index !== -1) {
      const newChecked = [...checked];
      newChecked.splice(index, 1);
      setChecked(newChecked);
    } else {
      const newChecked = [...checked];
      setChecked(newChecked);
    }
  };

  const handleTransfer = () => {
    const selectedItems = [...checked];
    setSelected(selectedItems);
  };

  const handlePrint = () => {
    setPrint(true);
  };

  return (
    <div>
      <div style={{ margin: 100, display: "flex", flexDirection: "row" }}>
        <ListComponent
          classes={classes}
          defaultItems={defaultItems}
          handleToggle={handleToggle}
          checked={checked}
        />

        <div
          style={{
            marginLeft: 10,
            width: 260,
            height: 360,
          }}
        >
          <Tooltip title="Transfer" aria-label="transfer">
            <Fab
              aria-label="play"
              style={{ margin: 100 }}
              onClick={handleTransfer}
            >
              <PlayArrowIcon />
            </Fab>
          </Tooltip>
        </div>

        <SelectedComponent
          classes={classes}
          selected={selected}
          handleDelete={handleDelete}
        />

        <div
          style={{
            marginLeft: 10,
            width: 260,
            height: 360,
          }}
        >
          <Button
            variant="contained"
            href="#contained-buttons"
            style={{ marginLeft: 100, marginTop: 50 }}
            onClick={handlePrint}
          >
            Print
          </Button>
        </div>
      </div>

      {showPrint ? (
        <div style={{ marginLeft: 100 }}>
          {selected.map(item => {
            const text = `${item.label} : {label : ${item.label}, value: ${item.value}}`;
            return (
              <p key={item.label} style={{ width: "100%" }}>
                {text}
              </p>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
