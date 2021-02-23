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
                Feb. 22, 2021
              </Typography>
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
                enough, so he decided to step forward – He brought a petition
                with over 10,000 signatures asking for mandatory counseling for
                all military personnel prior to discharging and brought it to
                Washington. While there he learned you don’t tell them what to
                do, you go there asking for help in what you are doing. We are
                the change, not our politicians who are just a reflection of us.
              </Typography>
            </div>
            <div className={classes.journalContainer}>
              <Typography variant="h3" color="primary">
                Entry #2
              </Typography>
              <Typography variant="overline" color="secondary">
                Feb. 12, 2021
              </Typography>
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
                enough, so he decided to step forward – He brought a petition
                with over 10,000 signatures asking for mandatory counseling for
                all military personnel prior to discharging and brought it to
                Washington. While there he learned you don’t tell them what to
                do, you go there asking for help in what you are doing. We are
                the change, not our politicians who are just a reflection of us.
              </Typography>
            </div>
            <div className={classes.journalContainer}>
              <Typography variant="h3" color="primary">
                Entry #3
              </Typography>
              <Typography variant="overline" color="secondary">
                Jan. 1, 2021
              </Typography>
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
                enough, so he decided to step forward – He brought a petition
                with over 10,000 signatures asking for mandatory counseling for
                all military personnel prior to discharging and brought it to
                Washington. While there he learned you don’t tell them what to
                do, you go there asking for help in what you are doing. We are
                the change, not our politicians who are just a reflection of us.
              </Typography>
            </div>
          </Grid>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.ctaButton}
          >
            SEE ALL
          </Button>
        </Grid>
      </Container>
    </div>
  );
};

Journals.propTypes = {
  className: PropTypes.string
};

export default Journals;
