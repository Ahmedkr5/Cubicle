import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PrimarySearchAppBar from '../AppBar';
import TopSidebar from './TopSidebar';
import MidSidebar from './MidSidebar';
import BottomSidebar from './BottomSidebar';
import { Paper } from '@material-ui/core';
import Profile from '../../Views/Profile';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginLeft : '15px'
  },
  drawerPaper: {
    background: "transparent",
    width: drawerWidth,
  },
  drawerContainer: {
  },
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
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        
          <TopSidebar></TopSidebar>
          <MidSidebar></MidSidebar>
<BottomSidebar></BottomSidebar>     
      </div>
    </div>
  );
}