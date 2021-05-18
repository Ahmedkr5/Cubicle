import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import FriendReq from '../Friends/FriendReq';
import ConnectedList from './ConnectedList';



const useStyles = makeStyles((theme) => ({
  root: {
    width:'400px',
    position:'fixed',
    height:'100%'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {

    flexShrink: 0,
    marginLeft : '15px'
  },
  drawerPaper: {
    background: "transparent",

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

        
          <FriendReq></FriendReq>  
          <ConnectedList></ConnectedList>
      </div>

  );
}