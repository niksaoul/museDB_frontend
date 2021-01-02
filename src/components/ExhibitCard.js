import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 280,
    height: 510,
    backgroundColor: '#18435A'
  },
  media: {
    height: 250,
    paddingTop: '0%', // 16:9,
    marginTop:'10',
  },
  description : {
  }
});

export default function ExhibitCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title={props.title}
          component="img"
          src={props.imagsrc}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="textPrimary" align = "right">
            {props.title}
          </Typography>
          <Button size="small" color="primary">
            {props.creator}
          </Button>
          <Typography variant="body1" align = "left" component="h3" color="Secondary">
            {props.type}
          </Typography>
          <Typography variant="body2" align = "justify" color="textSecondary" component="p" className={classes.description}>
            {props.description} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

      </CardActions>
    </Card>
  );
}
