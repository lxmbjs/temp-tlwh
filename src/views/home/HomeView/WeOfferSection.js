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
import FeaturedCard from './FeaturedCard';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 75,
    paddingBottom: 75
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
    padding: '0 200px',
    marginTop: 25,
    textAlign: 'center',
    color: '#828682',
    [theme.breakpoints.down('md')]: {
      padding: 0
    }
  }
}));

const WeOfferSection = ({ className, ...rest }) => {
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
          ABOUT US
        </Typography>
        <Typography variant="h1" align="center" color="textPrimary">
          Learn more about our services
        </Typography>
        <hr className={classes.divider} />
        <Typography variant="body2" className={classes.description}>
          The Long Walk Home is a non-profit organization. We have events based
          out of South West Florida and opportunities to volunteer online. Learn
          more about how you can get involved in helping Veterans make their
          adjustment to civilian life below.
        </Typography>
        <Box mt={8}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FeaturedCard
                title="Become A Member"
                description="Members receive; 10% Off all TLWH’s Merchandise, Membership Certificate, and you get to choose the category to donate to."
                image="/static/images/marketing-site/icons/Membership.png"
                newTab={true}
                link="https://www.flipcause.com/secure/cause_pdetails/MTA3Mjg1"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeaturedCard
                title="Events"
                description="Our events are based out of South West Florida and if you aren’t local we offer online events."
                image="/static/images/marketing-site/icons/Events.png"
                link="/events"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <FeaturedCard
                title="Become A Sponsor"
                description="Click here to learn more about sponsorship opportunities"
                image="/static/images/marketing-site/icons/Sponsors.png"
                link="/sponsor-us"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <FeaturedCard
                title="Host An Event"
                description="If you would like to host an event through The Long Walk Home click here"
                image="/static/images/marketing-site/icons/Host an Event.png"
                link="https://thelongwalkhome.us10.list-manage.com/subscribe?u=517ce98bac982fd4a794be0be&id=67e98fcb64"
                newTab={true}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeaturedCard
                title="Facebook Group"
                description="Join our Facebook group - Military To Civilian Life"
                image="/static/images/marketing-site/icons/Facebook.png"
                newTab={true}
                link="https://www.facebook.com/groups/military2civilianlife/"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeaturedCard
                title="Financial Assistance"
                description="Submit an application for direct financial assistance from The Long Walk Home."
                image="/static/images/marketing-site/icons/Financial Assistance.png"
                link="/request-assistance"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

WeOfferSection.propTypes = {
  className: PropTypes.string
};

export default WeOfferSection;
