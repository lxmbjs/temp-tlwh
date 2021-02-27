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
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: 128,
    paddingBottom: 128
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
    color: '#db252f',
    textAlign: 'center'
  },
  galleryBody: {
    marginTop: '15px',
    textAlign: 'center'
  }
}));

const Gallery = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="md">
        <Typography
          component="p"
          variant="overline"
          color="primary"
          align="left"
          className={classes.subHeader}
        >
          IN ACTION
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

        <Splide
          options={{
            type: 'loop',
            width: 'auto',
            height: 540,
            perPage: 1,
            perMove: 1,
            gap: '1rem',
            pagination: true
          }}
        >
          <SplideSlide>
            <img src="/static/images/marketing-site/test-2.png" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src="/static/images/marketing-site/test-2.png" alt="Image 2" />
          </SplideSlide>
        </Splide>
      </Container>
    </div>
  );
};

Gallery.propTypes = {
  className: PropTypes.string
};

export default Gallery;
