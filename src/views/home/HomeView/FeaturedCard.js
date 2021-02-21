import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HealingIcon from '@material-ui/icons/Healing';

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
    width: '100%',
    fontSize: '5.5rem',
    margin: '25px 0 0 0',
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

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <HealingIcon className={classes.iconClass} />
      <CardContent style={{ textAlign: 'center' }}>
        <Typography variant="h3" component="h2">
          Lorem Ipsum
        </Typography>
        <Typography
          variant="body2"
          component="p"
          className={classes.cardParagraph}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          className={classes.ctaButton}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
