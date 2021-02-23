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
          <Grid
            item
            xs={12}
            style={{ paddingLeft: '25px' }}
            alignContent="center"
          >
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
              Ron founded The Long Walk Home in 2006 and immediately after,
              walked the Appalachian Trail barefoot in 2006 to 2007 to create
              awareness for PTSD. This became his penance to forgiving himself
              for sitting on his hands, blaming others for 33 years.
            </Typography>

            <Typography
              variant="body1"
              align="left"
              className={classes.galleryBody}
            >
              After his Appalachian Trail hike, he decided to walk barefoot
              across the United States. Ron saw his politicians were not doing
              enough, so he decided to step forward – He brought a petition with
              over 10,000 signatures asking for mandatory counseling for all
              military personnel prior to discharging and brought it to
              Washington. While there he learned you don’t tell them what to do,
              you go there asking for help in what you are doing. We are the
              change, not our politicians who are just a reflection of us.
            </Typography>
            <Typography
              variant="body1"
              align="left"
              className={classes.galleryBody}
            >
              Throughout the 14 years, Ron has also run events for Vets, hosted
              mindfulness programs, paid for 1-on-1 counseling, paid rent, food,
              housing, other general expenses for Vets that needed immediate
              support, and much more. He also supported the launch of a local
              shelter for homeless Veterans where he discovered that almost 80%
              of the homeless are children of Veterans.
            </Typography>
            <Typography
              variant="body1"
              align="left"
              className={classes.galleryBody}
            >
              Now he is taking his experiences to lead a movement of supporters
              for Veterans online through the group MilitaryToCivilianLife; A
              community of Veterans, family members, and supporters who are the
              change; supporting Veterans adjusting from military to civilian
              life. Offering Giveaways, Contests, Events, Livestreams, free
              services & more for Vets!
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
