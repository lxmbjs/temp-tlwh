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
          HOST AN EVENT OR SPONSOR US
        </Typography>
        <Typography variant="h1" align="center" color="textPrimary">
          GET INVOVLED
        </Typography>
        <hr className={classes.divider} />
        <Box mt={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <SponsorCard />
            </Grid>
            <Grid item xs={12} md={6}>
              <SponsorCard />
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
