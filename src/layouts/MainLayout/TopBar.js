import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  Hidden,
  Typography,
  Link,
  makeStyles
} from '@material-ui/core';
import Logo from 'src/components/Logo';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    height: 128,
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
    fontWeight: theme.typography.fontWeightMedium,
    '& + &': {
      marginLeft: theme.spacing(2)
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
      <Toolbar className={classes.toolbarTop}>
        <FacebookIcon className={classes.socialIcons} />
        <InstagramIcon className={classes.socialIcons} />
        <TwitterIcon className={classes.socialIcons} />
        <Box flexGrow={1} />
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/register"
          underline="none"
          variant="body2"
        >
          REGISTER
        </Link>
        <Divider className={classes.divider} />
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/login"
          underline="none"
          variant="body2"
        >
          LOGIN
        </Link>
      </Toolbar>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <Logo className={classes.logo} />
        </RouterLink>
        <Hidden mdDown>
          <div>
            <Typography variant="body1">THE LONG WALK HOME</Typography>
            <Typography variant="body2" style={{ color: '#db252f' }}>
              WE ARE A NON-PROFIT ORGANIZATION
            </Typography>
          </div>
        </Hidden>
        <Box flexGrow={1} />
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
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/by-laws"
          underline="none"
          variant="body2"
        >
          By Laws
        </Link>
        <Box flexGrow={1} />
        <Button
          color="default"
          component="a"
          href="https://material-ui.com/store/items/devias-kit-pro"
          variant="contained"
          size="small"
        >
          DONATE NOW
        </Button>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
