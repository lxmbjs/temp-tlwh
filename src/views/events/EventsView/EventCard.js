import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  },
  ctaButton: {
    marginTop: '15px'
  }
}));

const EventCard = ({ title, date, link, imageLink, desc }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <img src={imageLink} className={classes.flexImg} />
        <CardContent className={classes.content}>
          <Typography variant="h3" color="primary">
            {title}
          </Typography>
          <Typography variant="overline" color="secondary">
            {date}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {desc}
          </Typography>
          {link !== undefined ? (
            <Button
              component="a"
              href={link}
              target="_blank"
              variant="contained"
              color="secondary"
              className={classes.ctaButton}
            >
              Sign Up
            </Button>
          ) : (
            ''
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default EventCard;
