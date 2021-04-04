import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import FriendReq from '../Friends/FriendReq';
import ConnectedList from './ConnectedList';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:'15px',
    marginRight:'15px',
    position:'fixed',
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

export default function RightSidebar() {
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
        
          <FriendReq></FriendReq>  
          <ConnectedList></ConnectedList>
      </div>
    </div>
  );
}