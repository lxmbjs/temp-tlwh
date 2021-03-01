import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Button,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import SponsorCard from './SponsorCard';
import PaymentIcon from '@material-ui/icons/Payment';
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 50,
    paddingBottom: 128
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  divider: {
    width: '5%',
    backgroundColor: '#db252f',
    height: '3px',
    border: 'none',
    margin: 'auto',
    marginTop: '10px'
  },
  subHeader: {
    fontWeight: 700
  },
  description: {
    padding: '0 250px',
    marginTop: 25,
    textAlign: 'center',
    color: '#828682'
  }
}));

const SponsorSection = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography
          component="p"
          variant="overline"
          color="primary"
          align="center"
          className={classes.subHeader}
        >
          EVENTS & SponsorshipS
        </Typography>
        <Typography variant="h1" align="center" color="textPrimary">
          GET INVOVLED
        </Typography>
        <hr className={classes.divider} />
        <Box mt={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <SponsorCard
                icon={EventIcon}
                title="Host an Event"
                desc="If you are interested in hosting an event with or for The Long Walk Home click below!"
                link=""
                ctaText="Learn More"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SponsorCard
                icon={PaymentIcon}
                title="Sponsor Us"
                desc="Interested in becoming a sponsor, click below to request more information."
                link=""
                ctaText="Learn More"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

SponsorSection.propTypes = {
  className: PropTypes.string
};

export default SponsorSection;
