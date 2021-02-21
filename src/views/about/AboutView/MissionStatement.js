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
    paddingBottom: 50
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
    width: '100%'
  }
}));

const MissionStatement = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="md">
        <Grid container alignItems="center">
          <Grid item md={6} xs={12}>
            <img
              src={'static/images/marketing-site/who-we-are-logo.png'}
              className={classes.flexImg}
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            style={{ paddingLeft: '25px' }}
            alignContent="center"
          >
            <Typography
              component="p"
              variant="overline"
              color="primary"
              align="left"
              className={classes.subHeader}
            >
              OUR DEDICATION
            </Typography>
            <Typography variant="h1" align="left" className={classes.title}>
              MISSION STATEMENT
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
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

MissionStatement.propTypes = {
  className: PropTypes.string
};

export default MissionStatement;
