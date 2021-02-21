import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 128,
    paddingBottom: 128
  },
  title: {
    fontWeight: theme.typography.fontWeightRegular
  },
  testimonialText: {
    marginTop: 15
  },
  name: {
    marginTop: 10
  }
}));

const Testimonials = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="md">
        <Grid container alignContent="center">
          <Grid item xs={12} md={4}>
            <div style={{ textAlign: 'center' }}>
              <img src="/static/images/marketing-site/Image.png" />
              <Typography
                variant="h4"
                color="secondary"
                className={classes.name}
              >
                Veteran Helped
              </Typography>
              <Typography variant="h5" style={{ color: '#828682' }}>
                Veteran
              </Typography>
              <Typography variant="body2" className={classes.testimonialText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ultricies mi sed odio mollis accumsan. Morbi lacinia odio nec.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div style={{ textAlign: 'center' }}>
              <img src="/static/images/marketing-site/Image.png" />
              <Typography
                variant="h4"
                color="secondary"
                className={classes.name}
              >
                Veteran Helped
              </Typography>
              <Typography variant="h5" style={{ color: '#828682' }}>
                Veteran
              </Typography>
              <Typography variant="body2" className={classes.testimonialText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ultricies mi sed odio mollis accumsan. Morbi lacinia odio nec.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div style={{ textAlign: 'center' }}>
              <img src="/static/images/marketing-site/Image.png" />
              <Typography
                variant="h4"
                color="secondary"
                className={classes.name}
              >
                Veteran Helped
              </Typography>
              <Typography variant="h5" style={{ color: '#828682' }}>
                Veteran
              </Typography>
              <Typography variant="body2" className={classes.testimonialText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ultricies mi sed odio mollis accumsan. Morbi lacinia odio nec.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string
};

export default Testimonials;
