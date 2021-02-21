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
    backgroundColor: theme.palette.primary.main,
    paddingTop: 128,
    paddingBottom: 128
  },
  title: {
    fontWeight: '700',
    color: '#fff'
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
    color: '#db252f'
  },
  galleryBody: {
    marginTop: '15px'
  }
}));

const Gallery = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="md">
        <Grid container alignItems="center">
          <Grid item md={6} xs={12}>
            <Typography
              component="p"
              variant="overline"
              color="primary"
              align="left"
              className={classes.subHeader}
            >
              WHAT WE DO
            </Typography>
            <Typography
              variant="h1"
              align="left"
              color="textPrimary"
              className={classes.title}
            >
              OUR GALLERY
            </Typography>
            <hr className={classes.divider} />
            <Typography
              variant="body1"
              align="left"
              className={classes.galleryBody}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </Typography>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <img
                  src={'static/images/marketing-site/gallery-home-small-1.png'}
                  style={{ width: '100%', padding: '10px 0' }}
                />
              </Grid>
              <Grid item md={6}>
                <img
                  src={'static/images/marketing-site/gallery-home-small-2.png'}
                  style={{ width: '100%', padding: '10px 0' }}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.ctaButton}
            >
              SEE ALL
            </Button>
          </Grid>
          <Grid item md={6} xs={12}>
            <img
              src={
                'static/images/marketing-site/66400314_2492134840810169_8213840021174616064_o.png'
              }
              style={{ width: '100%', marginLeft: '25px' }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Gallery.propTypes = {
  className: PropTypes.string
};

export default Gallery;
