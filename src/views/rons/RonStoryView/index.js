import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Footer from '../../home/HomeView/Footer';
import Hero from './Hero';
import TLWHJourney from './TLWHJourney';
import VideoSection from './VideoSection';
import Journals from './Journals';
const useStyles = makeStyles(() => ({
  root: {}
}));

const RonsStory = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Home">
      <Hero />
      <TLWHJourney />
      <VideoSection />
      <Journals />
      <Footer />
    </Page>
  );
};

export default RonsStory;
