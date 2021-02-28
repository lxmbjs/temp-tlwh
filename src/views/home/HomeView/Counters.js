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
          The Numbers Behind What We Do
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
                  The long walk home has a variety of programs that support
                  Veterans and their families. Here are some insights on
                  Veterans helped, Mentors, and our Donors
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
                <Typography variant="h2">Fundraising</Typography>
                <hr className={classes.subDivider} />
                <Typography variant="body2" className={classes.description}>
                  The three categories we raise money for are category 1,
                  category 2, category 3. 100% of our donations goes towards
                  helping Veterans make their transition to civilian life. We
                  take pride on our financial transparency.
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
