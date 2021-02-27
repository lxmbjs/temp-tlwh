import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HealingIcon from '@material-ui/icons/Healing';
import CountUp from 'react-countup';

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
    fontSize: '2.5rem',
    margin: '25px 0 25px 0',
    color: '#db252f'
  },
  cardParagraph: {
    marginTop: '15px',
    padding: '0 50px'
  },
  ctaButton: {
    margin: '0 auto 25px auto'
  },
  statText: {
    margin: '9px auto 25px auto'
  }
});

const StatCard = props => {
  const classes = useStyles();

  const { title = 'Title here', number = 12000, currency = false } = props;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent style={{ textAlign: 'center' }}>
        <HealingIcon className={classes.iconClass} />
        <Typography variant="h2" component="h2" className={classes.statText}>
          {currency ? '$' : ''}
          <CountUp end={number} />
        </Typography>
        <Typography variant="overline">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;
