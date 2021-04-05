import React from 'react';
import {Typography, Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { green} from '@material-ui/core/colors';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const preventDefault = (event) => event.preventDefault();
const useStyles = makeStyles((theme) => ({

      rounded: {
        color: '#fff',
        height: '40px',
        width: '40px',
        
        cursor: 'pointer',
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    margin: {
        display:'flex',
        margin: theme.spacing(2),
        flexDirection:'column',
      },
    margin2:{
        margin: theme.spacing(2),
    },     
    
}));
        
        

 



  export default function  Friends() {
    const classes = useStyles();
return(<div style={{border:'1px solid #F7F7F7 ',borderRadius:'7px',width:'400px',height:'115px'}}>
 <div style={{display:'flex',flexDirection:'row'}}> <div style={{width:'350px'}}>
<ListItem style={{display:'flex',flexDirection:'row'}}>
<Avatar style={{marginTop:'10px'}}
            aria-label='recipe'
            variant='rounded'
            className={classes.rounded}
            src={`../assets/images/users/avatar.jpg`}
          ></Avatar>
          
     
<Typography className={classes.margin}>
<Link href="#" onClick={preventDefault} style={{fontWeight:'bold',color:"#050505"}}>
    Ahmed Khiari
  </Link> 
  <Link href="#" onClick={preventDefault} style={{fontSize:'12px',color:'grey'}} > 12 mutual friends
  </Link>   
  </Typography>
  
</ListItem></div>
<div>
    <br></br>
<IconButton aria-label='settings' >
            <MoreHorizIcon />
          </IconButton>
</div></div>  
</div>
  
  
);





}