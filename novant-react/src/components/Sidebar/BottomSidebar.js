import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import { Card, CardMedia, Paper, Typography, withStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { Button } from 'react-bootstrap';
const drawerWidth = 300;
const StyledBadge = withStyles((theme) => ({
    badge: {
        left : '150%',
        top: '50%',
        
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      borderRadius :'15px',
      width: theme.spacing(4),
    height: theme.spacing(4),
    },
  }))(Badge);

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
  }
}));

export default function BottomSidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{marginTop:'10px',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
      <CssBaseline />
      <div className={classes.root} style={{marginTop:'10px',alignItems:'left',justifyContent:'left',flexDirection:'row'}}>
                
      <div>
      <StyledBadge badgeContent={4} color="secondary">
      <div style={{marginLeft:'-100%'}}>
      
      <Typography style={{color:'grey'}} variant="h6">Invitations</Typography>
      </div>
        </StyledBadge>
      </div>
      </div>

      <Paper elevation={0} style={{marginTop:'10px',background:'white',borderRadius:'10px'}}>

<Container style={{width:'300px'}}>      
          <ListItem style={{display:'flex',flexDirection:'column',paddingTop:'0px'}}>
          <Card style={{width:'300px',borderStyle:'none',paddingTop:'0px'}}>
      
        <CardMedia
          className={classes.media}
          image="images/cover.png"
          style={{width:'300px',height:'200px',marginTop:'0px',paddingTop:'0px'}}
          title="Group Invitation"
        />

        </Card>
        <Typography style={{marginTop:"-50px",color:"white"}} variant="h5" component="h2">
            Group Invitation
          </Typography>
        <div style={{display:"flex",justifyContent:"space-between",flexDirection:"row", marginTop:"40px"}}>
         
        <Button style={{margin:"10px"}}  variant="primary">
          Accept
        </Button>
        
        <Button style={{margin:"10px"}} variant="danger">
          Decline
        </Button>
      </div>
              </ListItem>

              
         
          </Container>
                
          </Paper>
    </div>
  );
}
