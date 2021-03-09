import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Container,
  Typography,
  Grid,
  makeStyles,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#f4f6f8',
    paddingTop: 50,
    paddingBottom: 50
  },
  title: {
    fontWeight: '700',
    color: '#000',
    textAlign: 'center'
  },
  divider: {
    width: '10%',
    backgroundColor: '#db252f',
    height: '3px',
    border: 'none',
    margin: '10px auto 25px auto'
  },
  subHeader: {
    fontWeight: 700,
    color: '#19426d',
    textAlign: 'center'
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
    width: '100%',
    margin: 'auto'
  },
  journalContainer: {
    padding: '25px',
    border: '1px solid #000',
    borderRadius: '4px',
    borderTop: '5px solid #db252f',
    marginBottom: '50px'
  },
  ctaButton: {
    margin: '0 auto 25px auto'
  }
}));

const Journals = ({ className, ...rest }) => {
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
              MY THOUGHTS
            </Typography>
            <Typography variant="h1" align="left" className={classes.title}>
              JOURNEY JOURNALS
            </Typography>
            <hr className={classes.divider} />
            <div className={classes.journalContainer}>
              <Typography variant="h3" color="primary">
                Ron's Daily Journals #1
              </Typography>
              <Typography variant="overline" color="secondary">
                March 3rd, 2021
              </Typography>
              <Typography
                variant="body1"
                align="left"
                className={classes.galleryBody}
              >
                No wind is strong enough to blow your mind: We are a choice
                everyday and when we let a physical force dictate what happens
                to our being we have given our power away and have become a
                victim. But, don't worry, it's only a mistake that can be fixed.
                Telling someone to forgive themselves is like trying to tell a
                woman who thinks she's fat that she isn't. I have been told that
                words are the least effective way of communication, and I
                believe them after I have tried to talk to people. I find when I
                talk from my heart instead of my head we connect through a
                feeling, which I think is more effective. I have a sign by my
                desk as a reminder about communication: I know that you believe
                you understand what you think I said, but I'm not sure you
                realize that what you heard is not what I meant. My serenity
                prayer: God, grant me the serenity to accept the people I cannot
                change, the courage to change the person I can and the wisdom to
                know that person is me. (borrowed from my friend Mindy Agler) I
                find that when I do something I've never done before the first
                step is the hardest. Like the first time I went sky diving, but
                after that step I was total present to the moment When I was
                little my father would sit me in his lap when he drove and let
                me hold the steering wheel. I thought I was driving the car.
                Sometimes I get glimpses of that when I think I've done things.
                A person once told me when I was walking across America that I
                was doing God's work, I said, "No, I'm joy riding, he's doing
                the work." Once I told one of my masters that practice makes
                perfect, he said, "It doesn't, but perfect practice does." The
                master was my son. Once in a while each of us gets inspired to
                do something, but if we wait long enough the feeling will go
                away and maybe it will become our regrete. Why take that chance.
              </Typography>
            </div>
          </Grid>
          {/*  <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.ctaButton}
          >
            SEE ALL
          </Button>*/}
        </Grid>
      </Container>
    </div>
  );
};

Journals.propTypes = {
  className: PropTypes.string
};

export default Journals;
