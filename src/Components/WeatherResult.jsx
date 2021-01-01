
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function WeatherResult(props) {
  const classes = useStyles();

  console.log(props.image)

  

  return (
    <Card className={classes.root} style={{backgroundColor:'yellow',textAlign:'center'}}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {props.name} 
          <div class="weather-icon"><img src={props.image}/></div>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {props.temp} F  
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            <i class="fas fa-angle-up"></i>MAX_Temp:{props.maxtemp}F 
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
            <i class="fas fa-angle-down"></i>Min_Temp:{props.mintemp}F
            </Typography>
            
            <Typography variant="subtitle1" color="textSecondary">
              {props.des}
            </Typography>
            
          </CardContent>
          </div>

    </Card>
  );
}