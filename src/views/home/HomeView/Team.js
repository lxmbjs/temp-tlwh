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
  },
  flexImg: {
    display: 'block',
    flex: '0 0 auto',
    maxWidth: '75%',
    height: 'auto',
    margin: 'auto',
    borderRadius: '3px'
  },
  description: {
    padding: '0 250px',
    marginTop: 25,
    textAlign: 'center',
    color: '#828682'
  },
  ctaButton: {
    margin: '50px auto 25px auto'
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
          OUR HEART AND SOUL
        </Typography>
        <Typography variant="h1" align="center" color="textPrimary">
          THE TEAM
        </Typography>
        <hr className={classes.divider} />
        <Typography variant="body2" className={classes.description}>
          The Long Walk Home has been mostly a one man show until 2020. Now we
          have 5 full-time employees and looking to scale even further in 2021.
          You can learn more about our team and Board Of Directors below.
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          className={classes.cardSection}
          spacing={4}
        >
          <Grid item xs={12}>
            <img
              src="/static/images/marketing-site/team-photo.jpg"
              className={classes.flexImg}
            />
          </Grid>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.ctaButton}
          >
            LEARN MORE
          </Button>
        </Grid>
      </Container>
    </div>
  );
};

Team.propTypes = {
  className: PropTypes.string
};

export default Team;
