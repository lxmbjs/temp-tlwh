import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '25px'
  },
  details: {
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  content: {},
  ctaContainer: {
    flex: '1 0 auto',
    textAlign: 'right',
    marginRight: '25px'
  },
  cover: {
    width: 190
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  },
  flexImg: {
    display: 'block',
    flex: '0 0 auto',
    width: '100%',
    height: 'auto',
    margin: 'auto'
  },
  ctaButton: {
    textAlign: 'right',
    paddingRight: '25px'
  },
  imgContainer: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
}));

const EventCards = ({ title, date, link, imageLink, over }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            backgroundImage: `url(${imageLink})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          className={classes.imgContainer}
        ></Grid>
        <Grid item xs={12} sm={8}>
          <Grid container alignItems="center">
            <Grid item xs={8}>
              <CardContent className={classes.content}>
                <Typography variant="h3" color="primary">
                  {title}
                </Typography>
                <Typography variant="overline" color="secondary">
                  {date}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={4} className={classes.ctaButton}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                component="a"
                href={link}
                target="_blank"
              >
                {over ? 'View' : 'Sign Up'}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default EventCards;
