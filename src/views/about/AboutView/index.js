import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Footer from '../../home/HomeView/Footer';
import MissionStatement from './MissionStatement';
import VisionStatement from './VisionStatement';
import ExecutiveSummary from './ExecutiveSummary';
const useStyles = makeStyles(() => ({
  root: {}
}));

const AboutView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Home">
      <MissionStatement />
      <VisionStatement />
      <ExecutiveSummary />
      <Footer />
    </Page>
  );
};

export default AboutView;
