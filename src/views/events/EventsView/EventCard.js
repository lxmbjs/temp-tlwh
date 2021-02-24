import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginBottom: '50px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151
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
    maxWidth: '100%',
    height: 'auto',
    margin: 'auto'
  }
}));

const EventCard = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <img
          src="/static/images/marketing-site/event-example.jpg"
          className={classes.flexImg}
        />
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

export default EventCard;
