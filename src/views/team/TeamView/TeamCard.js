import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto'
  },
  contentRoot: {
    padding: 35
  },
  cardTitle: {
    textAlign: 'center',
    marginBottom: 15
  },
  socialIconArea: {
    borderTop: '1px solid rgba(192, 195, 192, 0.3)'
  },
  socialIcons: {
    color: '#19426d',
    margin: '0 10px'
  }
}));

const TeamCard = ({ name = 'Name here', title = 'Title here' }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="placeholder"
        height="250"
        image="/static/images/marketing-site/blog-card-image.png"
        title="Placeholder"
      />
      <CardContent className={classes.contentRoot}>
        <Typography
          variant="h4"
          component="h2"
          color="primary"
          className={classes.cardTitle}
          style={{ marginBottom: '0px' }}
        >
          {name}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="h3"
          color="secondary"
          className={classes.cardTitle}
        >
          {title}
        </Typography>
      </CardContent>

      <CardActions className={classes.socialIconArea}>
        <div style={{ margin: 'auto', padding: '15px 15px' }}>
          <FacebookIcon className={classes.socialIcons} />
          <InstagramIcon className={classes.socialIcons} />
          <TwitterIcon className={classes.socialIcons} />
        </div>
      </CardActions>
    </Card>
  );
};

export default TeamCard;
