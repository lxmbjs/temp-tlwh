import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Container, Typography, Grid, makeStyles } from '@material-ui/core';
import ReactPlayer from 'react-player';
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: 50,
    paddingBottom: 50
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
    margin: '10px auto 0 auto'
  },
  subHeader: {
    fontWeight: 700,
    color: '#db252f'
  },
  galleryBody: {
    marginTop: '15px'
  },
  flexImg: {
    display: 'block',
    flex: '0 0 auto',
    maxWidth: '75%',
    height: 'auto',
    width: '100%',
    margin: '25px auto 0px auto'
  },
  videoContainer: {
    width: 640,
    height: 360,
    [theme.breakpoints.down('xs')]: {
      width: 360
    }
  }
}));

const TLWHJourney = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="md">
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Typography
              variant="h1"
              align="left"
              color="textPrimary"
              className={classes.title}
            >
              THE LONG WALK HOME JOURNEY
            </Typography>
            <hr className={classes.divider} />
            <div
              className={classes.videoContainer}
              style={{ margin: '15px auto 0 auto' }}
            >
              <ReactPlayer
                url="https://player.vimeo.com/video/323869962"
                controls={true}
                width="100%"
                height="100%"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

TLWHJourney.propTypes = {
  className: PropTypes.string
};

export default TLWHJourney;
