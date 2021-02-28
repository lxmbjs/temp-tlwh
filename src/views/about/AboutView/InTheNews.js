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
import BlogCard from '../../home/HomeView/BlogCard';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 128,
    paddingBottom: 128
  },
  title: {
    fontWeight: '700'
  },
  divider: {
    width: '10%',
    backgroundColor: '#db252f',
    height: '3px',
    border: 'none',
    marginTop: '10px'
  },
  subHeader: {
    fontWeight: 700,
    color: '#db252f'
  },
  galleryBody: {
    marginTop: '15px'
  },
  cardSection: {
    marginTop: 25
  }
}));

const VisionStatement = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="md">
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Typography
              component="p"
              variant="overline"
              color="primary"
              align="left"
              className={classes.subHeader}
            >
              KEEP UP WITH US
            </Typography>
            <Typography
              variant="h1"
              align="left"
              color="textPrimary"
              className={classes.title}
            >
              IN THE NEWS
            </Typography>
            <hr className={classes.divider} />
            <Grid
              container
              diretion="row"
              justify="center"
              className={classes.cardSection}
              spacing={4}
            >
              <Grid item xs={12} md={4}>
                <BlogCard
                  title={'Valuing our Veterans: Axe Throwing in North Port, FL'}
                  imageLink={'/static/images/marketing-site/news-1.jpg'}
                  description={
                    'Military veterans, their families and supporters were the beneficiaries of a Tuesday fun night at The Axe Haus in North Port.'
                  }
                  link={
                    'https://www.yoursun.com/northport/news/valuing-our-veterans-north-port-biz-owners-host-fun-night/article_3b402948-60bb-11eb-980b-6f0ff04e7390.html'
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <BlogCard
                  title={'Barbeque to Salute Veterans'}
                  imageLink={'/static/images/marketing-site/news-3.jpg'}
                  description={
                    'The annual event, put on by The Long Walk Home and founder Ron Zaleski, will feature a day of enjoyment and relaxation with food, entertainment, games and silent auctions.'
                  }
                  link={
                    'https://keysweekly.com/42/annual-salute-a-vet-barbecue-july-5'
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <BlogCard
                  title={'One Man’s Barefoot Mission to Stop Veteran Suicides'}
                  imageLink={'/static/images/marketing-site/news-2.jpg'}
                  description={
                    'The Long Walk Home is dedicated not only to spreading awareness for PTSD victims, but also to addressing the problem head on.'
                  }
                  link={
                    'https://genprogress.org/the-long-walk-home-one-barefoot-activists-mission-to-stop-the-veteran-suici/'
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

VisionStatement.propTypes = {
  className: PropTypes.string
};

export default VisionStatement;
