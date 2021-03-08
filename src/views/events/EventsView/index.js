import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Footer from '../../home/HomeView/Footer';
import EventsContainer from './EventsContainer';
import SponsorSection from './SponsorSection';
const useStyles = makeStyles(() => ({
  root: {}
}));

const Events = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Events">
      <SponsorSection />
      <EventsContainer />
      <Footer />
    </Page>
  );
};

export default Events;
