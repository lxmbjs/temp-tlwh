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

  centerFooterContainer: {
    background: 'white',
    padding: '25px 25px',
    borderRadius: '3px',
    textAlign: 'center',

    [theme.breakpoints.down('xs')]: {
      margin: '25px 0'
    }
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
    color: '#c3e6f9'
  },
  newsletterSubtext2: {
    marginTop: '25px',
    color: '#c3e6f9'
  },
  newsletterContainer: {
    padding: '0 25px'
  },
  resourceText: {
    color: '#fff'
  },
  hotline: {
    color: '#fff',
    marginBottom: '15px'
  },
  resourcesContainer: {
    textAlign: 'left',
    padding: '10px 50px',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      padding: '0'
    }
  },
  submitButton: {
    margin: 'auto',
    padding: '10px 15px',
    marginTop: '15px'
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
              xs={12}
              className={classes.footerItemContainer}
              style={{ textAlign: 'center' }}
            >
              <div className={classes.newsletterContainer}>
                <Typography variant="h2" style={{ color: 'white' }}>
                  NEWSLETTER
                </Typography>

                <div id="mc_embed_signup">
                  <form
                    action="https://thelongwalkhome.us10.list-manage.com/subscribe/post?u=517ce98bac982fd4a794be0be&amp;id=5bc07f67fc"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    noValidate
                  >
                    <div id="mc_embed_signup_scroll">
                      <div className="mc-field-group">
                        <TextField
                          id="mce-EMAIL"
                          name="EMAIL"
                          label="Email"
                          defaultValue=""
                          variant="outlined"
                          type="email"
                          className={classes.textInput}
                        />
                      </div>
                      <div id="mce-responses" className="clear">
                        <div
                          className="response"
                          id="mce-error-response"
                          style={{ display: 'none' }}
                        ></div>
                        <div
                          className="response"
                          id="mce-success-response"
                          style={{ display: 'none' }}
                        ></div>
                      </div>
                      <div
                        style={{ position: 'absolute', left: '-5000px' }}
                        aria-hidden="true"
                      >
                        <input
                          type="text"
                          name="b_517ce98bac982fd4a794be0be_5bc07f67fc"
                          tabIndex="-1"
                          defaultValue=""
                        />
                      </div>
                      <div className="clear">
                        <Button
                          variant="contained"
                          type="submit"
                          color="secondary"
                          size="small"
                          className={classes.submitButton}
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Grid>
            <Grid item md={4} xs={12} className={classes.footerItemContainer}>
              <div className={classes.centerFooterContainer}>
                <img
                  src="/static/images/marketing-site/footer-logo.png"
                  className={classes.flexImg}
                />
                <Typography
                  variant="body2"
                  className={classes.footerDescripitionCenter}
                >
                  Help Veterans make their adjustment from military to civilian
                  life. We offer direct support for Veterans, Volunteer
                  opportunities, and VIP treatment for all our donors!
                </Typography>
                <div className={classes.socialIconContainer}>
                  <a
                    href="https://www.facebook.com/Thelongwalkhomeinc/"
                    target="_blank"
                  >
                    <FacebookIcon className={classes.socialIcons} />
                  </a>
                  <a
                    href="https://www.instagram.com/militarytocivilianlife/"
                    target="_blank"
                  >
                    <InstagramIcon className={classes.socialIcons} />
                  </a>
                </div>
              </div>
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
              className={classes.footerItemContainer}
              style={{ textAlign: 'center' }}
            >
              <Typography variant="h2" style={{ color: 'white' }}>
                RESOURCES
              </Typography>
              <div className={classes.resourcesContainer}>
                <Typography
                  variant="overline"
                  className={classes.newsletterSubtext}
                >
                  ​VA Suicide Hotline:
                </Typography>
                <Typography variant="h4" className={classes.hotline}>
                  <a href="tel:18002738255" className={classes.resourceText}>
                    ​1-800-273-TALK (8255)
                  </a>
                </Typography>
                <Typography
                  variant="overline"
                  className={classes.newsletterSubtext2}
                >
                  ​Veteran's Assistance
                </Typography>
                <Typography variant="h4">
                  <a
                    href="https://www.veteranscrisisline.net/"
                    target="_blank"
                    className={classes.resourceText}
                  >
                    ​National VA Call Center
                  </a>
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
