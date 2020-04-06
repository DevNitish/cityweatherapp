import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../src/components/Navbar";
import CityView from "../src/components/CityView";
import Weather from "../src/components/Weather";

import "./styles.css";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    margin: theme.spacing(3),
    padding: theme.spacing(0, 3)
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  }
}));

export default function App() {
  const classes = useStyles();
  const [view, setView] = useState(true);

  const changeView = () => setView(!view);
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar name={"World is my Oyster"} view={view} changeView={changeView} />
      <div className={classes.root}>{view ? <CityView /> : <Weather />}</div>
    </div>
  );
}
