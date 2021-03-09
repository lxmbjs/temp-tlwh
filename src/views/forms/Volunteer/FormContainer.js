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

import Form from './Form';

const useStyles = makeStyles(theme => ({
  root: {
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
  contactSection: {
    marginTop: 50
  },
  textInput: {
    width: '100%'
  }
}));

const Contact = ({ className, ...rest }) => {
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
          Do you want to help veterans?
        </Typography>
        <Typography variant="h1" align="center" color="textPrimary">
          Complete the form below
        </Typography>
        <hr className={classes.divider} />
        <Grid
          container
          diretion="row"
          justify="center"
          className={classes.contactSection}
        >
          <Form />
        </Grid>
      </Container>
    </div>
  );
};

Contact.propTypes = {
  className: PropTypes.string
};

export default Contact;
