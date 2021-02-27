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
import BlogCard from '../../home/HomeView/BlogCard';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 128,
    paddingBottom: 128
  },
  title: {
    fontWeight: '700'
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
  },
  cardSection: {
    marginTop: 25
  }
}));

const VisionStatement = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="md">
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Typography
              component="p"
              variant="overline"
              color="primary"
              align="left"
              className={classes.subHeader}
            >
              KEEP UP WITH US
            </Typography>
            <Typography
              variant="h1"
              align="left"
              color="textPrimary"
              className={classes.title}
            >
              IN THE NEWS
            </Typography>
            <hr className={classes.divider} />
            <Grid
              container
              diretion="row"
              justify="center"
              className={classes.cardSection}
              spacing={4}
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
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

VisionStatement.propTypes = {
  className: PropTypes.string
};

export default VisionStatement;
