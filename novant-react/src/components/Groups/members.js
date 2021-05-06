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
import  { useState } from "react";
import List from '@material-ui/core/List';
import { useApi } from "../../hooks/useApi";
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();
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
        

  export default function  Members(props) {
    const classes = useStyles();
    const memb =props.member;
 console.log(memb);
    /*
const memb= memb.map((userid)=>



    const [userProf, err1, reload1] = useApi('users/'+ userid);
);

*/
  return(<>
  

   <List style={{display:'flex',flexWrap:'wrap',width:'100%'}}>
   
<ListItem style={{flex:'50%'}} >
<Avatar style={{marginTop:'10px'}}
            aria-label='recipe'
            variant='rounded'
            className={classes.rounded}
           
          ></Avatar>
          
     
<Typography className={classes.margin}>
<Link  
         style={{fontWeight:'bold',color:"#050505"}}>
       
  </Link> 
  <Link href="#" onClick={preventDefault} style={{fontSize:'12px',color:'grey'}} > {memb.join(', ')}
  </Link>   
  </Typography>
  <div>
    <br></br>
<IconButton aria-label='settings' >
            <MoreHorizIcon />
          </IconButton>
</div>
</ListItem>

</List>

  

 
  </>
  );





}