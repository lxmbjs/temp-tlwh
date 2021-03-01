import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Avatar, Box, Card, Typography, makeStyles } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Label from 'src/components/Label';
import CountUp from 'react-countup';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: 'none'
  },
  label: {
    marginLeft: theme.spacing(1)
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: 48,
    width: 48
  },
  firstBox: {
    borderRight: '2px solid #db252f'
  },
  secondBox: {
    borderRight: '2px solid #db252f'
  },
  lastBox: {
    marginRight: '10px'
  },
  counterTitles: {
    color: '#db252f'
  }
}));

const TodaysMoney = ({ className, ...rest }) => {
  const classes = useStyles();
  const data = {
    value: '24,000',
    currency: '$',
    difference: 4
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
      style={{ background: 'none' }}
    >
      <Box flexGrow={1} className={classes.firstBox}>
        <div style={{ marginRight: '15px' }}>
          <Typography
            component="h3"
            gutterBottom
            variant="overline"
            color="textSecondary"
            className={classes.counterTitles}
            style={{ marginRight: '10px' }}
          >
            Donations
          </Typography>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Typography
              variant="h3"
              color="textPrimary"
              style={{ color: '#fff' }}
            >
              {data.currency}
              <CountUp end={12000} />
            </Typography>
          </Box>
        </div>
      </Box>
      <Box flexGrow={1} className={classes.secondBox}>
        <div style={{ margin: '0 15px' }}>
          <Typography
            component="h3"
            gutterBottom
            variant="overline"
            color="textSecondary"
            className={classes.counterTitles}
            style={{ marginRight: '10px' }}
          >
            Subscriptions
          </Typography>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Typography
              variant="h3"
              color="textPrimary"
              style={{ color: '#fff' }}
            >
              {data.currency}
              <CountUp end={30000} />
            </Typography>
          </Box>
        </div>
      </Box>
      <Box flexGrow={1}>
        <div style={{ marginLeft: '15px' }}>
          <Typography
            component="h3"
            gutterBottom
            variant="overline"
            color="textSecondary"
            className={classes.counterTitles}
          >
            Proceeds
          </Typography>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Typography
              variant="h3"
              color="textPrimary"
              style={{ color: '#fff' }}
            >
              {data.currency}
              <CountUp end={9000} />
            </Typography>
          </Box>
        </div>
      </Box>
    </Card>
  );
};

TodaysMoney.propTypes = {
  className: PropTypes.string
};

export default TodaysMoney;
