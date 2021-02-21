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
import TextField from '@material-ui/core/TextField';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: 50,
    paddingBottom: 50,
    '& label.Mui-focused': {
      color: 'white'
    },
    '& label': {
      color: 'white'
    },
    '& .MuiInputBase-root': {
      color: 'white'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white'
      },
      '&:hover fieldset': {
        borderColor: 'white'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white'
      }
    }
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
    height: 'auto',
    maxWidth: '35%',
    margin: 'auto'
  },
  footerItemContainer: {
    margin: 'auto'
  },
  centerFooterContainer: {
    background: 'white',
    padding: '25px 25px',
    borderRadius: '3px',
    textAlign: 'center'
  },
  centerFooterImg: {
    margin: 'auto'
  },
  footerDescripitionCenter: {
    padding: '0 25px',
    marginTop: '25px'
  },
  socialIcons: {
    color: '#db252f',
    margin: '0 10px'
  },
  socialIconContainer: {
    marginTop: '25px'
  },
  textInput: {
    marginTop: '25px'
  },
  newsletterSubtext: {
    marginTop: '15px',
    padding: '0 50px'
  },
  newsletterContainer: {
    padding: '0 25px'
  }
}));

const Footer = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <footer className={classes.footerBottom}>
      <div className={clsx(classes.root, className)} {...rest}>
        <Container maxWidth="lg">
          <Grid container alignItems="center">
            <Grid
              item
              md={4}
              xs={6}
              className={classes.footerItemContainer}
              style={{ textAlign: 'center' }}
            >
              <div className={classes.newsletterContainer}>
                <Typography variant="h2" style={{ color: 'white' }}>
                  NEWSLETTER
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.newsletterSubtext}
                >
                  Subscribe to our Newsletter to be updated, we promise not to
                  spam.
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  className={classes.textInput}
                />
              </div>
            </Grid>
            <Grid item md={4} xs={6} className={classes.footerItemContainer}>
              <div className={classes.centerFooterContainer}>
                <img
                  src="/static/images/marketing-site/footer-logo.png"
                  className={classes.flexImg}
                />
                <Typography
                  variant="body2"
                  className={classes.footerDescripitionCenter}
                >
                  Lorem ipsum dolor amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua vero eoset.
                </Typography>
                <div className={classes.socialIconContainer}>
                  <FacebookIcon className={classes.socialIcons} />
                  <InstagramIcon className={classes.socialIcons} />
                  <TwitterIcon className={classes.socialIcons} />
                </div>
              </div>
            </Grid>
            <Grid
              item
              md={4}
              xs={6}
              className={classes.footerItemContainer}
              style={{ textAlign: 'center' }}
            >
              <div className={classes.newsletterContainer}>
                <Typography variant="h2" style={{ color: 'white' }}>
                  NEWS AND EVENTS
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.newsletterSubtext}
                >
                  We have these upcoming events:
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div style={{ padding: '25px 0', textAlign: 'center' }}>
        <Typography variant="body2" style={{ color: 'black' }}>
          © Copyright 2021 All Rights Reserved
        </Typography>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
