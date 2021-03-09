import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';

const useStyles = makeStyles(theme => ({
  container: {
    width: '50%',
    '& label.Mui-focused': {
      color: '#19426d'
    },
    '& label': {
      color: '#19426d'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  textInput: {
    width: '100%'
  },
  submitButton: {
    margin: 'auto',
    padding: '15px 50px',
    marginTop: '15px'
  },
  successContainer: {
    textAlign: 'center',
    width: '50%',
    color: 'green',
    fontFamily: 'ROBOTO',
    background: ' #abceab',
    padding: '10px',
    borderRadius: '4px',
    margin: 'auto'
  },
  errorContainer: {
    textAlign: 'center',
    width: '25%',
    color: 'red',
    fontFamily: 'ROBOTO',
    background: ' #fbe6e6',
    padding: '10px',
    borderRadius: '4px',
    margin: '0px auto 15px auto'
  }
}));

const Form = () => {
  const classes = useStyles();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={classes.container}>
      {error && <div className={classes.errorContainer}>Error!</div>}
      <form
        id="contact-form"
        onSubmit={e => {
          e.preventDefault();
          console.log(e);
          emailjs
            .sendForm(
              'service_f658qsg',
              'template_suwmqtd',
              e.target,
              'user_s6NDAY6ObadGiaGqPmzl1'
            )
            .then(
              response => {
                setSuccess(true);
                setError(false);
                document.getElementById('contact-form').reset();
              },
              err => {
                setError(true);
                console.log('FAILED...', err);
              }
            );
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="First Name"
              variant="outlined"
              name="first_name"
              className={classes.textInput}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Last Name"
              name="last_name"
              variant="outlined"
              className={classes.textInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="phone"
              label="Phone Number"
              variant="outlined"
              className={classes.textInput}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              className={classes.textInput}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              name="q_1"
              label="Have you had any training or experience that would be relevant for volunteering for The Long Walk Home?"
              variant="outlined"
              multiline
              rows={4}
              className={classes.textInput}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              name="q_2"
              label="What are your reasons for wanting to get involved in helping Veterans?"
              variant="outlined"
              multiline
              rows={4}
              className={classes.textInput}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="q_3"
              multiline
              rows={4}
              label="How did you hear about The Long Walk Home?"
              variant="outlined"
              className={classes.textInput}
            />
          </Grid>

          {success ? (
            <div className={classes.successContainer}>
              Success!
              <p>
                A representative will get back to you within 24 hours, thank you
              </p>
            </div>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              size="large"
              className={classes.submitButton}
            >
              Submit
            </Button>
          )}
        </Grid>
      </form>
    </div>
  );
};

export default Form;
