import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import TopSidebar from './TopSidebar';
import MidSidebar from './MidSidebar';
import BottomSidebar from './BottomSidebar';
import SearchAppBar from '../Navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '15px',
    position: 'fixed',
    height: '100%',
    width: '360px',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    height: '100%',
    flexShrink: 0,
  },
  drawerPaper: {
    background: 'transparent',
    height: '100%',
  },
  drawerContainer: {},
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <div
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <TopSidebar></TopSidebar>
        <MidSidebar></MidSidebar>
      </div>
    </div>
  );
}
