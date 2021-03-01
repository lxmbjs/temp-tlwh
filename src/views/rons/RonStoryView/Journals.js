import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Container,
  Typography,
  Grid,
  makeStyles,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#f4f6f8',
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
  },
  journalContainer: {
    padding: '25px',
    border: '1px solid #000',
    borderRadius: '4px',
    borderTop: '5px solid #db252f',
    marginBottom: '50px'
  },
  ctaButton: {
    margin: '0 auto 25px auto'
  }
}));

const Journals = ({ className, ...rest }) => {
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
              MY THOUGHTS
            </Typography>
            <Typography variant="h1" align="left" className={classes.title}>
              JOURNEY JOURNALS
            </Typography>
            <hr className={classes.divider} />
            <div className={classes.journalContainer}>
              <Typography variant="h3" color="primary">
                Entry #1
              </Typography>
              <Typography variant="overline" color="secondary">
                June 7th, 2016
              </Typography>
              <Typography
                variant="body1"
                align="left"
                className={classes.galleryBody}
              >
                On my way to California I happened to come across the Peace Abby
                and stopped in to see what they were up to as it seems a lot of
                peace movements are active and willing to help even if you still
                believe that there are times when a war may be just. I don’t get
                involved in politics as I don’t have the information to make
                that decision. Any decisions I make in those areas are
                meaningless as I am ill informed, but I do know and most can
                agree that our soldiers coming home need more help to adjust to
                coming home. Well while there they showed me a memorial they had
                for the unknown civilians who had died in combat. It is a one
                ton slab of Granite, engraved on it is, “To the unknown
                civilians killed in war”. It is not something that is talked
                about much, which isn’t surprising as 90% or better of the
                people killed in a war are civilians. That means if 10,000
                soldiers lost their lives, over 100,000 civilians are dead. It
                seems the people we try to save or protect suffer the most as a
                whole, we all suffer the same only with smaller numbers. Our
                soldiers seeing this first hand carry this with them for there
                is no honor in those deaths as compared to fighting an equal on
                a battlefield.
              </Typography>
            </div>
            <div className={classes.journalContainer}>
              <Typography variant="h3" color="primary">
                Entry #2
              </Typography>
              <Typography variant="overline" color="secondary">
                June 8th, 2016
              </Typography>
              <Typography
                variant="body1"
                align="left"
                className={classes.galleryBody}
              >
                Walking down lightly traveled roads as compared to being at the
                Boston Harbor I still am seen by closed to 2,000 drivers and
                have more of a chance to interact with people as I go. I am
                surprised at times by the people who stop me, such as the woman
                in there 70′s and 80′s to tell me of there Grandsons that are in
                the Military and not the same anymore. All experiences have an
                effect of some sort, but the experience of war generally doesn’t
                leave one with a lot of warm fuzzy feelings. There is a
                perpetual dark cloud in her life now as she frets for loved ones
                whose lives she seems to no longer be part of.
              </Typography>
            </div>
            <div className={classes.journalContainer}>
              <Typography variant="h3" color="primary">
                Entry #3
              </Typography>
              <Typography variant="overline" color="secondary">
                June 9th, 2016
              </Typography>
              <Typography
                variant="body1"
                align="left"
                className={classes.galleryBody}
              >
                On my stroll across this great land it has been brought to my
                attention that I maybe insane, it is a question I ask myself
                usually at the start of each day. I take this as a good sign
                that I am sane for I am told if you think your sane there is a
                good chance you really are crazy. When you here the story’s I do
                and see the broken lives I do I get impatient for everyday that
                goes by more good people have killed themselves, some quickly
                and others slowly and taking the innocent down with them. Is it
                so crazy to want that to change right now, today instead of
                waiting and saying in God’s time as families are destroyed?
              </Typography>

              <Typography
                variant="body1"
                align="left"
                className={classes.galleryBody}
              >
                After his Appalachian Trail hike, he decided to walk barefoot
                across the United States. Ron saw his politicians were not doing
                enough, so he decided to step forward – He brought a petition
                with over 10,000 signatures asking for mandatory counseling for
                all military personnel prior to discharging and brought it to
                Washington. While there he learned you don’t tell them what to
                do, you go there asking for help in what you are doing. We are
                the change, not our politicians who are just a reflection of us.
              </Typography>
            </div>
          </Grid>
          {/*  <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.ctaButton}
          >
            SEE ALL
          </Button>*/}
        </Grid>
      </Container>
    </div>
  );
};

Journals.propTypes = {
  className: PropTypes.string
};

export default Journals;
