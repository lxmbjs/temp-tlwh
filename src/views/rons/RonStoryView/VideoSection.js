import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Container,
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 50,
    paddingBottom: 50
  },
  title: {
    fontWeight: '700',
    color: '#000',
    textAlign: 'center'
  },
  divider: {
    width: '10%',
    backgroundColor: '#db252f',
    height: '3px',
    border: 'none',
    margin: '10px auto 25px auto'
  },
  subHeader: {
    fontWeight: 700,
    color: '#19426d',
    textAlign: 'center'
  },
  galleryBody: {
    marginTop: '15px',
    color: '#000'
  },
  flexImg: {
    display: 'block',
    flex: '0 0 auto',
    maxWidth: '75%',
    height: 'auto',
    width: '100%',
    margin: 'auto'
  }
}));

const VideoSection = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="md">
        <Grid container alignItems="center">
          <Grid item xs={12} alignContent="center">
            <Typography
              component="p"
              variant="overline"
              color="primary"
              align="left"
              className={classes.subHeader}
            >
              THE MESSAGE
            </Typography>
            <Typography variant="h1" align="left" className={classes.title}>
              <span style={{ color: '#db252f' }}>22</span> VETS COMMIT SUICIDE A
              DAY
            </Typography>
            <hr className={classes.divider} />

            <Typography
              variant="body1"
              align="left"
              className={classes.galleryBody}
            >
              Before founding The Long Walk Home, Ron owned a gym and scuba shop
              for 28 years. After serving in the Marine Corps, exercise and
              breath work was crucial in healing Ron's recovery after the war.
              These are practices he still promotes to this day.
            </Typography>

            <Typography
              variant="body1"
              align="left"
              className={classes.galleryBody}
            >
              In 2006, Ron embarked on his first barefoot walk to raise
              awareness for victims of PTSD. Covering the entire length of the
              Appalachian Trail, Ron would stop and speak to fellow trailblazers
              about his mission. He was shocked to find just how many veterans
              and family members had been scarred by the effects of war. That
              same year, Ron established this organization.
            </Typography>
            <Typography
              variant="body1"
              align="left"
              className={classes.galleryBody}
            >
              Ron took on an even more daunting task in 2010—walking barefoot
              across the entire country. Carrying a sign that read "18 Vets a
              Day Commit Suicide", Ron would walk 3,400 miles from Concord, MA
              to Santa Monica, CA. His journey became a national sensation,
              garnering the attention of every city and town he passed. Veterans
              would approach him daily to show appreciation for his efforts.
              Mothers would stop him in the street to tell him stories about how
              they lost their child to war or suicide. It wouldn't be long
              before Ron's journey would catch the attention of politicians in
              Washington. While he had been critical of this country’s elected
              officials for most of his life, he eventually realized that he was
              in no position to complain unless he took action.
            </Typography>
            <img
              src="/static/images/marketing-site/journey-map.png"
              className={classes.flexImg}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

VideoSection.propTypes = {
  className: PropTypes.string
};

export default VideoSection;
