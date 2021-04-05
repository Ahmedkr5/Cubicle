import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Avatar, Container, Paper, Typography } from '@material-ui/core';
import authService from '../../services/auth.service';
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "red",
  },
  drawerContainer: {
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function TopSidebar() {
  const classes = useStyles();
  const user = authService.getCurrentUser() ;


  return (
    <div className={classes.root}>
      <CssBaseline />
     <Paper elevation={0} style={{display: 'flex',background:'white',borderRadius:'10px',alignItems:'center',justifyContent:'center',width:'300px',padding:'0px'}}>
<Container style={{padding:'0px'}}>         
              <ListItemLink href="/profile" style={{display: 'flex',flexDirection:'row'}}>
                <ListItemIcon style={{marginLeft:'10px'}}>
                  
                <img alt="Bayrem Zguimi" src="images/avatar.jpg" style={{width:'50px',borderRadius:'10px'}} />
                </ListItemIcon>
                <br/>
                <div style={{display: 'flex',marginLeft:'10%',flexDirection:'column'}}>
                <ListItemText><Typography variant="h6">{user['firstname']} {user['lastname']} </Typography></ListItemText>
                </div>
              </ListItemLink>

          </Container>
          </Paper>
        
    </div>
  );
}
