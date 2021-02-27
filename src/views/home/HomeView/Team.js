import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Grid,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';
import TeamCard from './TeamCard';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 128,
    paddingBottom: 128
  },
  browseButton: {
    marginLeft: theme.spacing(2)
  },
  divider: {
    width: '5%',
    backgroundColor: '#db252f',
    height: '3px',
    border: 'none',
    margin: 'auto',
    marginTop: '10px'
  },
  cardSection: {
    marginTop: 50
  },
  flexImg: {
    display: 'block',
    flex: '0 0 auto',
    maxWidth: '75%',
    height: 'auto',
    margin: 'auto',
    borderRadius: '3px'
  },
  description: {
    padding: '0 250px',
    marginTop: 25,
    textAlign: 'center',
    color: '#828682'
  },
  ctaButton: {
    margin: '50px auto 25px auto'
  }
}));

const Team = ({ className, ...rest }) => {
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
          OUR
        </Typography>
        <Typography variant="h1" align="center" color="textPrimary">
          TEAM
        </Typography>
        <hr className={classes.divider} />
        <Typography variant="body2" className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          className={classes.cardSection}
          spacing={4}
        >
          <Grid item xs={12}>
            <img
              src="/static/images/marketing-site/team-photo.jpg"
              className={classes.flexImg}
            />
          </Grid>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.ctaButton}
          >
            OUR TEAM
          </Button>
        </Grid>
      </Container>
    </div>
  );
};

Team.propTypes = {
  className: PropTypes.string
};

export default Team;
