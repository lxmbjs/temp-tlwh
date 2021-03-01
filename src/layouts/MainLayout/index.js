import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import TopBar from './TopBar';
import NavBar from './NavBar';
import MobileTopbar from './MobileTopbar';
import useWindowDimensions from '../../useWindowDimensions';
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 174,
    [theme.breakpoints.down('xs')]: {
      paddingTop: 65
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  },
  '&::-webkit-scrollbar': {
    width: 0,
    height: 0
  }
}));

const MainLayout = ({ children }) => {
  const { height, width } = useWindowDimensions();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {width <= 425 ? (
        <Fragment>
          <MobileTopbar onMobileNavOpen={() => setMobileNavOpen(true)} />
          <NavBar
            onMobileClose={() => setMobileNavOpen(false)}
            openMobile={isMobileNavOpen}
          />
        </Fragment>
      ) : (
        <TopBar />
      )}

      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
