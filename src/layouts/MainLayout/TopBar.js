import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Link,
  makeStyles
} from '@material-ui/core';
import Logo from 'src/components/Logo';
import TodaysMoney from 'src/views/reports/DashboardView/TodaysMoney';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    height: 110,
    backgroundColor: '#19426d'
  },
  toolbarTop: {
    height: 64,
    backgroundColor: '#112c48'
  },
  toolbarLinks: {
    height: 64,
    backgroundColor: '#db252f'
  },
  logo: {
    marginRight: theme.spacing(2),
    width: 75,
    height: 'auto'
  },
  link: {
    fontSize: '18px',
    fontWeight: theme.typography.fontWeightMedium,
    '& + &': {
      marginLeft: theme.spacing(5)
    },
    color: '#fff'
  },
  divider: {
    width: 1,
    height: 32,
    backgroundColor: '#d3d3d3',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  socialIcons: {
    color: '#d3d3d3',
    marginRight: theme.spacing(2)
  }
}));

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} color="default" {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <Logo className={classes.logo} />
        </RouterLink>
        <div>
          <Typography variant="body1" style={{ fontWeight: '700' }}>
            THE LONG WALK HOME
          </Typography>
          <Typography variant="body2" style={{ color: '#c3e6f9' }}>
            NON-PROFIT ORGANIZATION
          </Typography>
        </div>
        <Box flexGrow={1} />
        <TodaysMoney />
      </Toolbar>
      <Toolbar className={classes.toolbarLinks}>
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/"
          underline="none"
          variant="body2"
        >
          Home
        </Link>
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/about-us"
          underline="none"
          variant="body2"
        >
          About Us
        </Link>

        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/our-team"
          underline="none"
          variant="body2"
        >
          Our Team
        </Link>
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/rons-story"
          underline="none"
          variant="body2"
        >
          Ron's Story
        </Link>
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/events"
          underline="none"
          variant="body2"
        >
          Events
        </Link>
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/faq"
          underline="none"
          variant="body2"
        >
          FAQ
        </Link>

        <Box flexGrow={1} />
        <Button
          color="default"
          component="a"
          href="https://www.flipcause.com/secure/cause_pdetails/Mzg4NzM="
          target="_blank"
          variant="contained"
          size="large"
        >
          DONATE
        </Button>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
