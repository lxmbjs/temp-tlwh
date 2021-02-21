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
    backgroundColor: '#8e050f'
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
  },
  flexImg: {
    display: 'block',
    flex: '0 0 auto',
    maxWidth: '75%',
    height: 'auto',
    width: '100%'
  },
  contactBox: {
    padding: '25px 0'
  },
  contactBoxMiddle: {
    padding: '25px 0',
    borderLeft: '1px solid rgba(255,255,255, 0.1)',
    borderRight: '1px solid rgba(255,255,255, 0.1)'
  },
  contactBoxText: {
    position: 'absolute',
    top: '50%',
    left: ' 50%',
    transform: 'translate(-50%, -50%)',
    fontWeight: 700
  },
  contactBoxTitle: {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  textContainer: {
    position: 'relative',
    color: 'white'
  }
}));

const ContactBar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Grid container alignItems="center" style={{ textAlign: 'center' }}>
          <Grid item xs={12} md={4} className={classes.contactBox}>
            <div className={classes.textContainer}>
              <img src="/static/images/marketing-site/location-icon.png" />
              <Typography variant="body1" className={classes.contactBoxText}>
                Location
              </Typography>
              <Typography variant="h3" className={classes.contactBoxTitle}>
                Key Largo, Florida
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={classes.contactBoxMiddle}>
            <div className={classes.textContainer}>
              <img src="/static/images/marketing-site/email-icon.png" />
              <Typography variant="body1" className={classes.contactBoxText}>
                Email
              </Typography>
              <Typography variant="h3" className={classes.contactBoxTitle}>
                help@thelongwalkhome.com
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={classes.contactBox}>
            <div className={classes.textContainer}>
              <img src="/static/images/marketing-site/call-icon.png" />
              <Typography variant="body1" className={classes.contactBoxText}>
                Call Us
              </Typography>
              <Typography variant="h3" className={classes.contactBoxTitle}>
                (305) 399-5354
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

ContactBar.propTypes = {
  className: PropTypes.string
};

export default ContactBar;
