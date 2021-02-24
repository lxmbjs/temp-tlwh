import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Footer from '../../home/HomeView/Footer';
import Faq from './Faq';

const useStyles = makeStyles(() => ({
  root: {}
}));

const FAQView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Home">
      <Container size="md">
        <Faq />
      </Container>
      <Footer />
    </Page>
  );
};

export default FAQView;
