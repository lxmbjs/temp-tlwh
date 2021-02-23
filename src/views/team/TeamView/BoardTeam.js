import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Grid,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';
import TeamCard from './TeamCard';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: 50
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
    marginTop: '10px'
  },
  cardSection: {
    marginTop: 50
  }
}));

const BoardTeam = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography
          component="p"
          variant="overline"
          color="primary"
          align="center"
          className={classes.subHeader}
        >
          BOARD OF
        </Typography>
        <Typography variant="h1" align="center" color="textPrimary">
          DIRECTORS
        </Typography>
        <hr className={classes.divider} />
        <Grid
          container
          direction="row"
          justify="flex-start"
          className={classes.cardSection}
          spacing={4}
        >
          <Grid item xs={12} md={4}>
            <TeamCard name="Sean McMahon" title="Vice President" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TeamCard name="Duane C. Stamm" title="Secretary" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TeamCard name="Zach C Zaleski" title="Treasurer" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TeamCard name="Wayne Overton" title="" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TeamCard name="Nic Marinaro" title="" />
          </Grid>
          <Grid item xs={12} md={4}>
            <TeamCard name="Sam Lambert" title="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

BoardTeam.propTypes = {
  className: PropTypes.string
};

export default BoardTeam;
