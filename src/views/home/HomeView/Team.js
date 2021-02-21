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
    paddingTop: 128,
    paddingBottom: 128
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

const Team = ({ className, ...rest }) => {
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
          OUR
        </Typography>
        <Typography variant="h1" align="center" color="textPrimary">
          TEAM
        </Typography>
        <hr className={classes.divider} />
        <Grid
          container
          direction="row"
          justify="center"
          className={classes.cardSection}
          spacing={4}
        >
          <Grid item xs={12} md={'auto'}>
            <TeamCard />
          </Grid>
          <Grid item xs={12} md={'auto'}>
            <TeamCard />
          </Grid>
          <Grid item xs={12} md={'auto'}>
            <TeamCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Team.propTypes = {
  className: PropTypes.string
};

export default Team;
