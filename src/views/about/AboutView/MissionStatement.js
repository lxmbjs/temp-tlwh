import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Container, Typography, Grid, makeStyles } from '@material-ui/core';

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
          <Grid item md={6} xs={12} style={{ paddingLeft: '25px' }}>
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
              The Long Walk Home’s mission is to help veterans make the
              transition from military to civilian life.
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
