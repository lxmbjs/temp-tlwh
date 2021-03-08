import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';
import { autofill } from 'redux-form';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'fff',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 60,
      paddingBottom: 60
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 25,
      paddingBottom: 25
    }
  },
  technologyIcon: {
    height: 40,
    margin: theme.spacing(1)
  },
  titleBox: {
    textAlign: 'left'
  },
  image: {
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    '& > img': {
      maxWidth: '90%',
      height: 'auto',
      transform: 'rotateY(-35deg) rotateX(15deg)',
      backfaceVisibility: 'hidden',
      boxShadow: theme.shadows[16]
    }
  },
  shape: {
    position: 'absolute',
    top: 0,
    left: 0,
    '& > img': {
      maxWidth: '90%',
      height: 'auto'
    }
  },
  subTitle: {
    color: '#fff'
  },
  title: {
    fontWeight: '700',
    fontSize: '32pt',
    color: '#19426d'
  },
  whiteText: {
    color: '#000'
  },
  divider: {
    width: '10%',
    backgroundColor: '#db252f',
    height: '3px',
    border: 'none',
    margin: '15px auto 0 0'
  },
  ctaButton: {
    margin: '25px auto 25px 0'
  },
  flexImg: {
    display: 'block',
    flex: '0 0 auto',
    maxWidth: '100%',
    height: 'auto',
    width: '100%',
    margin: 'auto 0 auto auto'
  },
  item1: {
    order: 1,
    [theme.breakpoints.down('xs')]: {
      order: 2
    }
  },
  item2: {
    order: 2,
    [theme.breakpoints.down('xs')]: {
      order: 1
    }
  }
}));

const Hero = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6} className={classes.item1}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
              className={classes.titleBox}
            >
              <Typography variant="overline" color="secondary">
                SIGN UP NOW!
              </Typography>
              <Typography variant="h1" className={classes.title}>
                Join our movement and help us save 22 lives every day
              </Typography>
              <hr className={classes.divider} />
              <Box mt={3}>
                <Typography variant="body1" className={classes.whiteText}>
                  Help Veterans make their adjustment from military to civilian
                  life. We offer direct support for Veterans, Volunteer
                  opportunities, and VIP treatment for all our donors!
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                component="a"
                href="https://www.flipcause.com/secure/cause_pdetails/MTA3Mjg1"
                target="_blank"
                className={classes.ctaButton}
              >
                SIGN UP
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.item2}>
            <img
              src="/static/images/marketing-site/the-long-walk-home.png"
              className={classes.flexImg}
            />
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
