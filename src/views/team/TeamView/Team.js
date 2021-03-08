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
    paddingTop: 50,
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
          MEET THE
        </Typography>
        <Typography variant="h1" align="center" color="textPrimary">
          TEAM
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
            <TeamCard
              name="Ron Zaleski"
              title="Founder & President"
              image="/static/images/marketing-site/Ron.jpg"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TeamCard
              name="Terri Miller"
              title="Finance Manager & Event Planner"
              image="/static/images/marketing-site/Terri.jpg"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TeamCard
              name="Craig Wallace"
              title="Marketing Manager"
              image="/static/images/marketing-site/Craig.jpg"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TeamCard
              name="Cody Mcelhinny"
              title="Graphic Designer"
              image="/static/images/marketing-site/Cody.jpg"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TeamCard
              name="AnnMarie Kennedy"
              title="Event Coordinator"
              image="/static/images/marketing-site/Annmarie.jpg"
            />
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
