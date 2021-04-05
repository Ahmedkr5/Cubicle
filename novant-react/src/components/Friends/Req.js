import React from 'react';
import {Typography, Container } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { green} from '@material-ui/core/colors';

import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';


const preventDefault = (event) => event.preventDefault();
const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        
      },
    

        
        
      
     
      rounded: {
        color: '#fff',
        height: '40px',
        width: '40px',
        backgroundColor: green[500],
        cursor: 'pointer',
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    margin: {
        margin: theme.spacing(1),
        
      },
      extendedIcon: {
        marginRight: theme.spacing(1),
      },
}));



  export default function  Req() {
    const classes = useStyles();
return(
    
        
        <Paper elevation={0} style={{marginTop:'15px',background:'white',borderRadius:'10px',width:'360px',height:'150px'}}>
        <Container style={{width:'360px',marginTop:'15px'}}>
        <ListItem style={{display:'flex',flexDirection:'row'}}>

        <Avatar style={{marginRight:'10px'}}
            aria-label='recipe'
            variant='rounded'
            className={classes.rounded}
            src={`../assets/images/users/avatar.jpg`}
          >
            
          </Avatar>
<Typography style={{color:"primary"}} >
<Link href="#" onClick={preventDefault} style={{fontWeight:'bold'}}>
    Ahmed Khiari
  </Link>  wants to add you to friends
          </Typography>
          </ListItem>
    
    <ListItem style={{display:'flex',flexDirection:'row'}}>
    <Button variant="contained" color="primary" size='large'style={{borderRadius:'12px'}}>
  Accept
</Button>
<Button variant="outlined"  size='large' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
          Decline
        </Button>


    </ListItem></Container>
        </Paper>
        
);





}