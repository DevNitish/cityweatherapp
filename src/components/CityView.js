import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CardMedia } from '@material-ui/core';

import {fetchCities} from "../actions/cityAction"
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin:"1rem"
  },
  media: {
    height: "3rem",
    paddingTop: '56.25%', // 16:9
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));
const mapStateToProps=(state)=>{
  return {
    cityArr:state.cityArr.cities
  }
}
const CityView= function (props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  useEffect(()=>{
    props.fetchCities()
  },[])
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log("props,: ", props.cityArr)
  return (
    <div className={classes.root}>
      {
        props.cityArr.map(obj=>
          <ExpansionPanel expanded={expanded === obj.id} onChange={handleChange(obj.id)}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
              <b>
                {obj.name}
              </b>
              </Typography>              
              <Typography >
              {obj.shortDes}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                {obj.des}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )
      }
    </div>
  );
}

export default connect(mapStateToProps, {fetchCities})(CityView);