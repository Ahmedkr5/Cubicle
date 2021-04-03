import React from 'react';
import { withStyles,Typography, Container } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { makeStyles,MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { green,blue } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[800],
        }
      },
});





const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxWidth:'350px'
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
        
      border: `5px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      borderRadius :'15px',
      width: theme.spacing(4),
    height: theme.spacing(4),
    },
   
  }))(Badge);




export default function  FriendReq() {
    const classes = useStyles();
return(<>
    <div className={classes.root} style={{marginTop:'10px',flexDirection:'column'}}>
    <MuiThemeProvider theme={theme}>
<div style={{width:'350px'}}>
      <StyledBadge badgeContent={2} color="primary">
      <div style={{marginLeft:'-140%'}}>

      <Typography style={{color:'grey',fontSize:'12',fontWeight:'bold'}} >REQUESTS</Typography>
      </div>
        </StyledBadge>
        </div></MuiThemeProvider>
        <Paper elevation={3} style={{marginTop:'15px',background:'white',borderRadius:'10px',width:'350px',height:'150px'}}>
        <Container style={{width:'350px',marginTop:'15px'}}>
        <ListItem style={{display:'flex',flexDirection:'row'}}>

        <Avatar style={{marginRight:'10px'}}
            aria-label='recipe'
            variant='rounded'
            className={classes.rounded}
          >
            A
          </Avatar>
<Typography style={{color:"primary"}} variant="h7" component="h7">
          <b> Ahmed Khiari</b>  wants to add you to friends
          </Typography>
          </ListItem>
    
    <ListItem style={{display:'flex',flexDirection:'row'}}>
    <Button variant="contained" color="primary" size="large" style={{fontWeight:'bold'}}>
  Accept
</Button>
<Button variant="outlined" size="large"  className={classes.margin} style={{marginRight:"20px",fontWeight:'bold'}}>
          Decline
        </Button>


    </ListItem></Container>
        </Paper>
        <Paper elevation={3} style={{marginTop:'15px',background:'white',borderRadius:'10px',width:'350px',height:'150px'}}>
        <Container style={{width:'350px',marginTop:'15px'}}>
        <ListItem style={{display:'flex',flexDirection:'row'}}>

        <Avatar style={{marginRight:'10px'}}
            aria-label='recipe'
            variant='rounded'
            className={classes.rounded}
          >
            A
          </Avatar>
<Typography style={{color:"primary"}} variant="h7" component="h7">
          <b> Ahmed Khiari</b>  wants to add you to friends
          </Typography>
          </ListItem>
    
    <ListItem style={{display:'flex',flexDirection:'row'}}>
    <MuiThemeProvider theme={theme}>
    <Button variant="contained" color="primary" size="large" style={{fontWeight:'bold'}}>
  Accept
</Button>

<Button variant="outlined" size="large"  className={classes.margin} style={{marginRight:"20px",fontWeight:'bold'}}>
          Decline
        </Button>
        </MuiThemeProvider>

    </ListItem></Container>
        </Paper>
        </div>
        
        
        </>
);





}