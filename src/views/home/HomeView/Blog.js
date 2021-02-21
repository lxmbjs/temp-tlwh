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
import BlogCard from './BlogCard';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
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
  description: {
    padding: '0 250px',
    marginTop: 25,
    textAlign: 'center',
    color: '#828682'
  },
  cardSection: {
    marginTop: 50
  }
}));

const Blog = ({ className, ...rest }) => {
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
          NEWS & EVENTS
        </Typography>
        <Typography variant="h1" align="center" color="textPrimary">
          OUR BLOG
        </Typography>
        <hr className={classes.divider} />
        <Typography variant="body2" className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </Typography>
        <Grid
          container
          diretion="row"
          justify="center"
          className={classes.cardSection}
        >
          <Grid item xs={12} md={4}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <BlogCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Blog.propTypes = {
  className: PropTypes.string
};

export default Blog;
