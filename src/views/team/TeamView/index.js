import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Footer from '../../home/HomeView/Footer';
import Team from './Team';
import BoardTeam from './BoardTeam';

const useStyles = makeStyles(() => ({
  root: {}
}));

const TeamView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Home">
      <Team />
      <BoardTeam />
      <Footer />
    </Page>
  );
};

export default TeamView;
