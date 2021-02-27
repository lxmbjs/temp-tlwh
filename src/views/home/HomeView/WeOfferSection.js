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
    padding: '0 250px',
    marginTop: 25,
    textAlign: 'center',
    color: '#828682'
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
          WHO WE ARE
        </Typography>
        <hr className={classes.divider} />
        <Typography variant="body2" className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </Typography>
        <Box mt={8}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <FeaturedCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeaturedCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeaturedCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeaturedCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeaturedCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeaturedCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeaturedCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeaturedCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <FeaturedCard />
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
