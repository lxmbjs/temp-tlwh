import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginBottom: '25px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 255
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  },
  flexImg: {
    display: 'block',
    flex: '0 0 auto',
    maxWidth: '25%',
    height: 'auto',
    margin: 'auto'
  }
}));

const EventCards = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="/static/images/marketing-site/event-example.jpg"
        title="Event Image 1"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h3" color="primary">
            Entry #2
          </Typography>
          <Typography variant="overline" color="secondary">
            Feb. 12, 2021
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Event Details, link to facebook, etc
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default EventCards;
