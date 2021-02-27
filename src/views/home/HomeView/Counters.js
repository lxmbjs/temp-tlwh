import React from 'react';
import {
  Box,
  Button,
  Grid,
  Container,
  Typography,
  makeStyles,
  Card,
  CardContent
} from '@material-ui/core';
import CountUp from 'react-countup';
import Stats from './Stats';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
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
    marginTop: '10px',
    marginBottom: '25px'
  },
  subDivider: {
    width: '15%',
    backgroundColor: '#db252f',
    height: '3px',
    border: 'none',
    margin: '10px auto 10px 0'
  },
  description: {
    color: '#000'
  },
  cardSection: {
    marginTop: 50
  },
  counterTitles: {
    color: '#db252f'
  },
  sectionTitles: {
    color: '#19426d',
    textAlign: 'center'
  },
  peopleContainers: {
    padding: '25px',
    backgroundColor: '#fff'
  }
}));

const Counters = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography
          component="p"
          variant="overline"
          color="primary"
          align="center"
          className={classes.subHeader}
        >
          OUR CONTRIBUTION
        </Typography>
        <Typography variant="h1" align="center" color="textPrimary">
          WHO WE HELP
        </Typography>
        <hr className={classes.divider} />

        <Grid
          container
          direction="row"
          className={classes.cardSection}
          spacing={2}
        >
          <Grid item xs={12}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={3}>
                <Typography variant="h2">The People</Typography>
                <hr className={classes.subDivider} />
                <Typography variant="body2" className={classes.description}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Stats title={'Veterans Helped'} number={120} />
              </Grid>
              <Grid item xs={12} md={3}>
                <Stats title={'Mentees'} number={448} />
              </Grid>
              <Grid item xs={12} md={3}>
                <Stats title={'Donors'} number={1080} />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant="h2">The Numbers</Typography>
                <hr className={classes.subDivider} />
                <Typography variant="body2" className={classes.description}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <Stats title={'Donations'} number={1200} currency={true} />
              </Grid>
              <Grid item xs={12} md={3}>
                <Stats title={'Subscriptions'} number={30000} currency={true} />
              </Grid>
              <Grid item xs={12} md={3}>
                <Stats title={'Proceeds'} number={9000} currency={true} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Counters;
