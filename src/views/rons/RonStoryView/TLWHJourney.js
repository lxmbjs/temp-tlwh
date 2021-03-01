import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Container, Typography, Grid, makeStyles } from '@material-ui/core';

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
            <img
              src="/static/images/marketing-site/video-preview.png"
              className={classes.flexImg}
            />
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
