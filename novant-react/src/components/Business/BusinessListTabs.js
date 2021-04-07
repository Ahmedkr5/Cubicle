import React from 'react';
import {Typography, Container } from '@material-ui/core';
import { BottomNavigation, BottomNavigationAction, Divider } from "@material-ui/core";
import { fade,makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import  { useState } from "react";
import BusinessList from './BusinessList';
import InvitationsList from './InvitationsList';

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


export default function  BusinessListTabs() {
    const classes = useStyles()
    const [state, setState] = useState("0") 
    const [value, setValue] = React.useState(0);
    return(<>
        <div>
            <Container style={{borderRadius: '10px'  ,backgroundColor:'white',height:'100%'}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',height:'50px'}}>  
                <div>
                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        showLabels
                        style={{marginBottom:"10px" ,borderRadius: '10px'    }}
                    >
                        <BottomNavigationAction onClick={()=>setState("0")} label="Businesses"/>
                        <BottomNavigationAction onClick={()=>setState("1")} label="Invitations(2)"/>
                    </BottomNavigation>
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
                </div>
            </div>
            <div style={{display:'flex',flexDirection:'row',flexFlow:'wrap'}}>
                {state == "0" && <BusinessList></BusinessList>}
                {state == "1" && <InvitationsList></InvitationsList>}
            </div>
        </Container>        
    </div>
  </>
);
}