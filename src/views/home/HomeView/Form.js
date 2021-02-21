import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    width: '50%',
    '& label.Mui-focused': {
      color: '#19426d'
    },
    '& label': {
      color: '#19426d'
    }
  },
  textInput: {
    width: '100%'
  },
  submitButton: {
    margin: 'auto',
    padding: '15px 50px',
    marginTop: '15px'
  }
}));

const Form = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container} spacing={3}>
      <Grid item xs={12} md={6}>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          className={classes.textInput}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          className={classes.textInput}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          className={classes.textInput}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className={classes.textInput}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          multiline
          rows={4}
          label="Message"
          variant="outlined"
          className={classes.textInput}
        />
      </Grid>

      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.submitButton}
      >
        Submit
      </Button>
    </Grid>
  );
};

export default Form;
