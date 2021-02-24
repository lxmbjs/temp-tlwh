import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
import EventCard from './EventCard';
const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 50,
    paddingBottom: 50
  },
  title: {
    fontWeight: '700',
    color: '#000',
    textAlign: 'center'
  },
  divider: {
    width: '10%',
    backgroundColor: '#db252f',
    height: '3px',
    border: 'none',
    margin: '10px auto 25px auto'
  },
  subHeader: {
    fontWeight: 700,
    color: '#19426d',
    textAlign: 'center'
  },
  galleryBody: {
    marginTop: '15px',
    color: '#000'
  },
  flexImg: {
    display: 'block',
    flex: '0 0 auto',
    maxWidth: '75%',
    height: 'auto',
    width: '100%'
  }
}));

const EventsContainer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography
        component="p"
        variant="overline"
        color="primary"
        align="left"
        className={classes.subHeader}
      >
        CONNECT WITH US
      </Typography>
      <Typography variant="h1" align="left" className={classes.title}>
        UPCOMING EVENTS
      </Typography>
      <hr className={classes.divider} />
      <EventCard />
      <EventCard />
    </Container>
  );
};

export default EventsContainer;
