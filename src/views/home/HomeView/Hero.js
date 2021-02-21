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
    backgroundImage: `url(/static/images/header-image.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.background.dark,
    paddingTop: 200,
    paddingBottom: 200,
    [theme.breakpoints.down('md')]: {
      paddingTop: 60,
      paddingBottom: 60
    }
  },
  technologyIcon: {
    height: 40,
    margin: theme.spacing(1)
  },
  titleBox: {
    padding: '150px',
    textAlign: 'center'
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
    color: '#fff',
    fontSize: '32pt'
  },
  whiteText: {
    color: '#fff',
    padding: '0 50px'
  },
  divider: {
    width: '10%',
    backgroundColor: '#db252f',
    height: '3px',
    border: 'none',
    margin: '10px auto 0 auto'
  },
  ctaButton: {
    margin: '25px auto 25px auto'
  }
}));

const Hero = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
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
                FOR THOSE WHO CARE FOR
                <br />
                OUR VETERANS.
              </Typography>
              <hr className={classes.divider} />
              <Box mt={3}>
                <Typography variant="body1" className={classes.whiteText}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.ctaButton}
              >
                SIGN UP NOW
              </Button>
            </Box>
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
