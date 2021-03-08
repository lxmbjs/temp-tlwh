import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Footer from '../../home/HomeView/Footer';
import FormContainer from './FormContainer';
const useStyles = makeStyles(() => ({
  root: {}
}));

const SponsorForm = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Sponsor Us">
      <FormContainer />
      <Footer />
    </Page>
  );
};

export default SponsorForm;
