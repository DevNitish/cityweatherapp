import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin:"1rem"
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.data.list[0].dt_txt.substring(0, 10)}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.data.city.name} ({props.data.city.country})
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <b>Max:</b> {props.data.list[0].main.temp_max}&#8451; &nbsp; <b>Min</b>: {props.data.list[0].main.temp_min}&#8451;
        </Typography>
        <Typography variant="body2" component="p">
          {props.data.list[0].weather[0].description}&nbsp;with wind speed: {props.data.list[0].wind.speed} meter/sec
        </Typography>
      </CardContent>
    </Card>
  );
}
