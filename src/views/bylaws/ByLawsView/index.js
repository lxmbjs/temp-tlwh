import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Footer from '../../home/HomeView/Footer';
import VisionStatement from './VisionStatement';
import ByLaws from './ByLaws';

const useStyles = makeStyles(() => ({
  root: {}
}));

const ByLawsView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Home">
      <VisionStatement />
      <ByLaws />
      <Footer />
    </Page>
  );
};

export default ByLawsView;
