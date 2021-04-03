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
      <Paper style={{width :'300px',marginTop:'10px',background:'white',borderRadius:'10px'}}>

<Container >         
          <ListItemLink href="/home" >
                <ListItemIcon   className={classes.iconWrapper} >
                  
                  <HomeOutlined color="primary" />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemLink>
              <Divider />
              <ListItemLink>
                <ListItemIcon   className={classes.iconWrapper} >
                  
                  <PeopleAltOutlined color="primary" />
                </ListItemIcon>
                <ListItemText>Friends</ListItemText>
              </ListItemLink>
              <Divider />

              <ListItemLink href="/chat">
                <ListItemIcon   className={classes.iconWrapper} >
                  
                  <MessageOutlined color="primary" />
                </ListItemIcon>
                <ListItemText>Messages</ListItemText>
              </ListItemLink>
              <Divider />

              <ListItemLink>
                <ListItemIcon   className={classes.iconWrapper} >
                  
                  <BusinessOutlined color="primary" />
                </ListItemIcon>
                <ListItemText>Business</ListItemText>
              </ListItemLink>
              <Divider />

              <ListItemLink>
                <ListItemIcon   className={classes.iconWrapper} >
                  
                  <SupervisedUserCircleOutlined color="primary" />
                </ListItemIcon>
                <ListItemText>Groups</ListItemText>
              </ListItemLink>
              <Divider />

              <ListItemLink>
                <ListItemIcon   className={classes.iconWrapper} >
                  
                  <MenuBook color="primary" />
                </ListItemIcon>
                <ListItemText>Courses</ListItemText>
              </ListItemLink>
              <Divider />

              <ListItemLink>
                <ListItemIcon   className={classes.iconWrapper} >
                  
                  <BusinessCenterOutlined color="primary" />
                </ListItemIcon>
                <ListItemText>Offres</ListItemText>
              </ListItemLink>


          </Container>
                </Paper>
        
    </div>
  );
}
