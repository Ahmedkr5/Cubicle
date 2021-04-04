import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Paper } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { BusinessCenterOutlined, BusinessOutlined, HomeOutlined, MenuBook, MessageOutlined, PeopleAltOutlined, SupervisedUserCircleOutlined } from '@material-ui/icons';
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

export default function MidSidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Paper elevation={0} style={{width :'300px',marginTop:'10px',background:'white',borderRadius:'10px'}}>

<Container  style={{padding:'0px'}}>         
         <ListItemLink style={{paddingLeft:'15%'}} href="/home" >
                <ListItemIcon   className={classes.iconWrapper} >
                  
                  <HomeOutlined color="#F0F2F5" />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemLink>
              <Divider variant="middle" />
              <ListItemLink style={{paddingLeft:'15%'}}>
                <ListItemIcon   className={classes.iconWrapper} >
                  
                  <PeopleAltOutlined color="#F0F2F5" />
                </ListItemIcon>
                <ListItemText>Friends</ListItemText>
              </ListItemLink>
              <Divider variant="middle" />
            <ListItemLink style={{paddingLeft:'15%'}}href="/chat">
                <ListItemIcon   className={classes.iconWrapper} >
                  
                  <MessageOutlined color="#F0F2F5" />
                </ListItemIcon>
                <ListItemText>Messages</ListItemText>
              </ListItemLink>
              <Divider variant="middle" />
             <ListItemLink style={{paddingLeft:'15%'}}>
                <ListItemIcon   className={classes.iconWrapper} >
                  
                  <BusinessOutlined color="#F0F2F5" />
                </ListItemIcon>
                <ListItemText>Business</ListItemText>
              </ListItemLink>
              <Divider variant="middle" />
             <ListItemLink style={{paddingLeft:'15%'}}>
                <ListItemIcon   className={classes.iconWrapper} >
                  
                  <SupervisedUserCircleOutlined color="#F0F2F5" />
                </ListItemIcon>
                <ListItemText>Groups</ListItemText>
              </ListItemLink>
              <Divider variant="middle" />
             <ListItemLink style={{paddingLeft:'15%'}}>
                <ListItemIcon   className={classes.iconWrapper} >
                  
                  <MenuBook color="#F0F2F5" />
                </ListItemIcon>
                <ListItemText>Courses</ListItemText>
              </ListItemLink>
              <Divider variant="middle" />
             <ListItemLink style={{paddingLeft:'15%'}}>
                <ListItemIcon   className={classes.iconWrapper} >
                  
                  <BusinessCenterOutlined color="#F0F2F5" />
                </ListItemIcon>
                <ListItemText>Offres</ListItemText>
              </ListItemLink>


          </Container>
                </Paper>
        
    </div>
  );
}
