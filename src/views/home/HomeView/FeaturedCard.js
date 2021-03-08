import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HealingIcon from '@material-ui/icons/Healing';
import { autofill } from 'redux-form';

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  iconClass: {
    display: 'flex',
    width: '75px',
    height: 'auto',
    fontSize: '5.5rem',
    margin: '25px auto 0 auto',
    color: '#62b2dd'
  },
  cardParagraph: {
    marginTop: '15px',
    padding: '0 50px'
  },
  ctaButton: {
    margin: '0 auto 25px auto'
  }
});
const FeaturedCard = props => {
  const classes = useStyles();

  const {
    title = 'Title here',
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image = '/static/images/marketing-site/icons/Membership.png',
    ctaText = 'Learn More',
    link = 'https://www.flipcause.com/secure/cause_pdetails/MTA3Mjg1',
    newTab = false
  } = props;
  return (
    <Card className={classes.root} variant="outlined">
      <img src={image} className={classes.iconClass} />

      <CardContent style={{ textAlign: 'center' }}>
        <Typography variant="h3" component="h2">
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          className={classes.cardParagraph}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          component="a"
          href={link}
          target={newTab ? '_blank' : ''}
          color="secondary"
          size="large"
          className={classes.ctaButton}
        >
          {ctaText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedCard;
