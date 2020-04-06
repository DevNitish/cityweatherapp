import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Map from "@material-ui/icons/Map";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(3),
    paddingRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1,
    align:"left"
  }
}));

export default function Navbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.name}
            <span className={classes.menuButton}>
              <Map />
            </span>
          </Typography>
          <Button
            style={{width:"9rem"}}
            variant="contained"
            onClick={props.changeView}
            color="secondary"
          >
            {props.view ? "Weather App" : "City App"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
