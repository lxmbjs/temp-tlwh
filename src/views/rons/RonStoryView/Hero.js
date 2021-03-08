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

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 50,
    paddingBottom: 50,
    [theme.breakpoints.down('xs')]: {
      padding: '25px 0px'
    }
  },
  title: {
    fontWeight: '700',
    color: '#000'
  },
  divider: {
    width: '10%',
    backgroundColor: '#db252f',
    height: '3px',
    border: 'none',
    marginTop: '10px'
  },
  subHeader: {
    fontWeight: 700,
    color: '#19426d'
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
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      margin: 'auto'
    }
  }
}));

const Hero = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="md">
        <Grid container alignItems="center">
          <Grid item md={6} xs={12}>
            <img
              src={'static/images/marketing-site/ron-z-story.png'}
              className={classes.flexImg}
            />
          </Grid>
          <Grid item md={6} xs={12} style={{ paddingLeft: '25px' }}>
            <Typography
              component="p"
              variant="overline"
              color="primary"
              align="left"
              className={classes.subHeader}
            >
              MY STORY
            </Typography>
            <Typography variant="h1" align="left" className={classes.title}>
              RON ZALESKI
            </Typography>
            <hr className={classes.divider} />
            <Typography
              variant="body1"
              align="left"
              className={classes.galleryBody}
            >
              The Long Walk Home is a metaphor for the difficult and often
              ignored re-entry process for our servicemen and women, especially
              those who served in combat.
            </Typography>

            <Typography
              variant="body1"
              align="left"
              className={classes.galleryBody}
            >
              We are dedicated to enhancing the dignity, honor and quality of
              life of our service men and women by providing a comprehensive
              program of re-entry services related to medical and mental health,
              re-socialization, personal finance and career development.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
