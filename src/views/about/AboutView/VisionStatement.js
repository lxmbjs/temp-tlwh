import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Container, Typography, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#19426d',
    paddingTop: 50,
    paddingBottom: 50
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
    marginTop: '10px',
    marginBottom: '25px'
  },
  subHeader: {
    fontWeight: 700,
    color: '#db252f'
  },
  galleryBody: {
    marginTop: '15px',
    color: '#fff'
  },
  flexImg: {
    display: 'block',
    flex: '0 0 auto',
    maxWidth: '75%',
    height: 'auto',
    width: '100%'
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
              OUR GOAL
            </Typography>
            <Typography variant="h1" align="left" className={classes.title}>
              VISION STATEMENT
            </Typography>
            <hr className={classes.divider} />
            <Typography
              variant="body1"
              align="left"
              className={classes.galleryBody}
            >
              To demonstrate appreciation and gratitude in a meaningful way to
              those who protect our freedom, by having a two week program
              instituted by the Armed Services for all military personnel prior
              to discharge, as well as, making it available to all veterans. The
              Long Walk Home is instituting a 10 Challenge Mentorship Program.
              The challenges help us to live a fuller life. If you would like to
              become a mentor contact Ron for more information. We also aid in
              other aspects of the transition process that may come up on an
              individual basis such as getting housing, work, benefits or
              whatever it is they may need.
            </Typography>
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
