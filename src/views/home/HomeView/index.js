import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import WeOfferSection from './WeOfferSection';
import Events from './Events';
import Counters from './Counters';
import Team from './Team';
import ContactBar from './ContactBar';
import Contact from './Contact';
import Footer from './Footer';
const useStyles = makeStyles(() => ({
  root: {}
}));

const HomeView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Home">
      <Hero />
      <WeOfferSection />
      <Events />
      <Counters />
      <Team />
      <ContactBar />
      <Contact />
      <Footer />
    </Page>
  );
};

export default HomeView;
