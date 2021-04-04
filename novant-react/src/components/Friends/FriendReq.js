import React from 'react';
import { withStyles,Typography } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { makeStyles,MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { green,blue } from '@material-ui/core/colors';
import List from '@material-ui/core/List';
import Req from './Req'
const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[800],
        }
      },
});



const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        
      },
    
    avatar: {
        backgroundColor: green[500],
      },
    
      rounded: {
        color: '#fff',
        height: '40px',
        width: '40px',
        backgroundColor: green[500],
        cursor: 'pointer',
    },
    margin: {
        margin: theme.spacing(1),
      },
      extendedIcon: {
        marginRight: theme.spacing(1),
      },
}));


const StyledBadge = withStyles((theme) => ({
    badge: {
        left : '190%',
        top: '50%',
        
      border: '3px solid',
      borderColor:'#EBEDF0',
      padding: '0px',
      borderRadius :'15px',
      width: theme.spacing(4),
    height: theme.spacing(4),
    },
   
  }))(Badge);

  //Onclick on badge ,colors,remove caps on buttons



export default function  FriendReq() {
    const classes = useStyles();
   
return(<>
    <div className={classes.root}  style={{marginTop:'10px',flexDirection:'column'}}>
    <MuiThemeProvider theme={theme}>
<div style={{width:'360px'}}>
      <StyledBadge badgeContent={2} color="primary">
      <div style={{marginLeft:'-140%'}}>

      <Typography style={{color:'grey',fontSize:'12',fontWeight:'bold'}} >REQUESTS</Typography>
      </div>
        </StyledBadge>      
        </div></MuiThemeProvider>
        
          
 <Req></Req>
 <Req></Req>
 
 
 </div>

        
        
        
        </>
);





}