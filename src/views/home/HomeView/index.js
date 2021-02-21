import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import Blog from './Blog';
import WhoWeAre from './WhoWeAre';
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
      <Features />
      <Gallery />
      <Testimonials />
      <Blog />
      <WhoWeAre />
      <Team />
      <ContactBar />
      <Contact />
      <Footer />
    </Page>
  );
};

export default HomeView;
