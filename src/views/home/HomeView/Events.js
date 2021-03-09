import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Container,
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import EventCards from './EventCards';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: 128,
    paddingBottom: 128
  },
  title: {
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center'
  },
  divider: {
    width: '10%',
    backgroundColor: '#db252f',
    height: '3px',
    border: 'none',
    margin: '10px auto'
  },
  subHeader: {
    fontWeight: 700,
    color: '#db252f',
    textAlign: 'center'
  },
  galleryBody: {
    marginTop: '15px',
    marginBottom: '25px',
    textAlign: 'center',
    padding: '0 50px',
    [theme.breakpoints.down('xs')]: {
      padding: 0
    }
  },
  ctaButton: {
    margin: 'auto'
  }
}));

const Events = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="md">
        <Typography
          component="p"
          variant="overline"
          color="primary"
          align="left"
          className={classes.subHeader}
        >
          GET INVOVLED
        </Typography>
        <Typography
          variant="h1"
          align="left"
          color="textPrimary"
          className={classes.title}
        >
          UPCOMING EVENTS
        </Typography>
        <hr className={classes.divider} />
        <Typography
          variant="body1"
          align="left"
          className={classes.galleryBody}
        >
          Learn more about The Long Walk Home’s upcoming events and how you can
          get involved below.
        </Typography>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <EventCards
              title="Battle Of The Branches Axe Throwing Tournament"
              date="Mar. 17, 2021"
              over={true}
              link="https://www.flipcause.com/secure/cause_pdetails/MTA5MDc0"
            />
            <EventCards
              title="Axe Throwing For Veterans"
              date="Jan. 26, 2021"
              over={true}
              link="https://www.facebook.com/events/1292436267800005/"
            />
            <EventCards
              title="Veteran's Day Bike Ride"
              date="Nov. 14, 2020"
              over={true}
              link="https://www.facebook.com/events/667668147440899/"
            />
          </Grid>

          <Button
            component="a"
            href="/events"
            variant="contained"
            size="large"
            color="secondary"
            className={classes.ctaButton}
          >
            See All
          </Button>
        </Grid>
      </Container>
    </div>
  );
};

Events.propTypes = {
  className: PropTypes.string
};

export default Events;
