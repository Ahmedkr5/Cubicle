import React from 'react';
import {Typography, Container } from '@material-ui/core';

import { fade,makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { green} from '@material-ui/core/colors';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Friends from './Friends'
import InputBase from '@material-ui/core/InputBase';

        
const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
      marginTop:'15px'
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '40px',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(2, 2, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '90%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
      
    },
  },
  
}));


 



  export default function  FriendList() {
    const classes = useStyles()
return(<>
    <div>
    <Container style={{borderRadius: '10px'  ,backgroundColor:'white'}}>
     <div style={{textAlign:'left',height:'60px',marginTop:'10px',display:'flex',flexDirection:'row',justifyContent:'left'}}>
     <Link href="#" style={{fontWeight:'bold',color:"#050505",fontWeight:'bold',fontSize:'16px'}}><br></br>
    Friends
  </Link> <div style={{display:'flex',flexDirection:'row'}}>
  <div className={classes.search} style={{display:'flex',flexDirection:'row',width:'600px'}}> 
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
  <InputBase  style={{height:'30px',width:'200px'}}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            /></div><div><br></br>
   <Button href="#" color="primary" size='small'>
        Requests
      </Button></div></div>
       
       </div> 
       <div style={{display:'flex',justifyContent: 'space-evenly',flexFlow:'wrap'}}>
        <Friends></Friends><Friends></Friends><Friends></Friends><Friends></Friends><Friends></Friends><Friends></Friends><Friends></Friends><Friends></Friends></div>
        </Container>
               
    </div>
  </>
);





}