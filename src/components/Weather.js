import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

import Card from "@material-ui/core/Card";
import Report from "./Report";
import Send from "@material-ui/icons/Send";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(0.5),
    width: "auto"
  },
  cardStyle: {
    paddingTop: theme.spacing(3),
    margin: "0.5rem"
  },
  root: {
    flexGrow: 1
  }
}));

const ShowData = function(props) {
  if (props.data && props.data.cod == 200) {
    return <Report data={props.data} />;
  } else if (props.data && props.data.err)
    return (
      <Typography style={{ color: "red" }}>{props.data.err || ""}</Typography>
    );
  else return <p />;
};

function AppSelector(props) {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [info, setInfo] = useState(null);

  const [loading, setLoading] = useState(false);
  const getWeather = event => {
    event.preventDefault();
    setLoading(true);
    setInfo(null);
    // let fetchURL = "https://api.openweathermap.org/data/2.5/forecast";
    let fetchURL = "/getweather";
    axios
      .post(fetchURL, {
          q: query        
      })
      .then(res => {
        setLoading(false);
        if(res.data.cod==200)
          setInfo(res.data);
        else
          setInfo({ err: "Something went wrong try again!" });

      })
      .catch(err => {
        setInfo({ err: "Something went wrong try again!" });
        setLoading(false);
      });
  };

  return (
    <div className={classes.root}>
      <Card className={classes.cardStyle}>
        <from autoComplete="off">
          <FormControl className={classes.formControl}>
            <TextField
              id="standard-basic"
              onChange={e => setQuery(e.target.value)}
              value={query}
              label="City"
            />
            <FormHelperText>Type: Delhi, Bengaluru, or 10001,us</FormHelperText>
          </FormControl>
          <br />
          <FormControl className={classes.formControl}>
            <Button
              disabled={!query}
              variant="contained"
              onClick={getWeather}
              color="primary"
            >
              Send
              <Send />
            </Button>
          </FormControl>
        </from>
        <br />
        <br />
        {loading ? (
          <FormHelperText style={{ padding: "0.5rem",color:"blue"}}>
            loading...
          </FormHelperText>
        ) : (
          <div>
            <ShowData data={info} />
          </div>
        )}
      </Card>
    </div>
  );
}

export default AppSelector;
