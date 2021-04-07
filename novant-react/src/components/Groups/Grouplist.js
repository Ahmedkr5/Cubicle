import React from 'react';
import {Typography, Container } from '@material-ui/core';
import { BottomNavigation, BottomNavigationAction, Divider } from "@material-ui/core";
import { fade,makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { green} from '@material-ui/core/colors';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import SaveIcon from '@material-ui/icons/Save';
import InputBase from '@material-ui/core/InputBase';
import  { useState } from "react";
import GroupInvitation from './GroupInvitation';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  
   
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      
      width: 'auto',
    
    },
  },
  searchIcon: {
    
    
  
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    
    // vertical padding + font size from searchIcon
    
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
      
    },
  },
  
}));


 



  export default function  Grouplist() {
    const classes = useStyles()
    const [state, setState] = useState("0") 
const [value, setValue] = React.useState(0);
return(<>
    <div>
    <Container style={{borderRadius: '10px'  ,backgroundColor:'white',height:'100%'}}>
     <div style={{display:'flex',flexDirection:'row',height:'100%',justifyContent:'space-between  '}}>  
     <div><BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    
     style={{marginBottom:"10px" ,borderRadius: '10px',  height:'30px'  }}
    > <BottomNavigationAction onClick={()=>setState("0")} label="Groups"  />
    <BottomNavigationAction onClick={()=>setState("1")} label="Invitations(4)"  /></BottomNavigation>
    
      
    </div>
  <div className={classes.search} style={{display:'flex',flexDirection:'row'}}> 
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
  <InputBase  style={{width:'auto'}}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
             <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<AddBoxOutlinedIcon />}
          >
            Create a group
          </Button>
            
            </div>  </div>
       
       
       <div style={{display:'flex',flexDirection:'row',flexFlow:'wrap',justifyContent:'space-between'}}>
       {state == "0" && <></>}
    {state == "1" && <>  <GroupInvitation></GroupInvitation><GroupInvitation></GroupInvitation><GroupInvitation></GroupInvitation><GroupInvitation></GroupInvitation></> }</div>
        </Container>
               
    </div>
  </>
);





}