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
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import InputBase from '@material-ui/core/InputBase';
import  { useState } from "react";
import GroupInvitation from './GroupInvitation';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import Groups from './groups';
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import authService from '../../services/auth.service';
import axios from "axios";
import List from '@material-ui/core/List';
import Groupcreate from './Groupcreate';
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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    height:'700px',
    width:'900px',
    backgroundColor: theme.palette.background.paper,
    border: '2px  #000',
    borderRadius:'20px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));


 



  export default function  Grouplist() {
    const handleKeyPress = (event) => {
      document.getElementById('result2').innerHTML = '';
      if (event.keyCode == 8) {
        var a = document
          .getElementById('search')
          .value.substr(0, document.getElementById('search').value.length - 1);
      } else {
        var a = document.getElementById('search').value + event.key;
      }
      document.getElementById('result2').innerHTML = '';
  
      var data = axios
        .get('http://localhost:3001/groups/a/' + a, {})
        .then(function (response) {
          return response.data;
        });
      var i = -1;
      data.then((value) => {
        value.forEach((element) => {
          i++;
          document.getElementById('result2').innerHTML =
            document.getElementById('result2').innerHTML +
            "<a class='MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button' tabindex='" +
            i +
            "' aria-disabled='false' href='http://localhost:3000/GroupProfile/" +
            element._id +
            "'><div class='MuiListItemText-root'><span class='MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock'>" +
            element.groupname +
            
            "</span></div><span class='MuiTouchRipple-root'></span></a><hr class='MuiDivider-root'>";
        });
        if (i == -1) {
          document.getElementById('result2').innerHTML =
            document.getElementById('result2').innerHTML +
            "<a class='MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button' tabindex='" +
            0 +
            "' aria-disabled='false' ><div class='MuiListItemText-root'><span class='MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock'>No Group Found</span></div><span class='MuiTouchRipple-root'></span></a><hr class='MuiDivider-root'>";
        }
      });
    };
    const classes = useStyles()
    const [state, setState] = useState("0") 
    const [open, setOpen] = React.useState(false);
    const currentuser = authService.getCurrentUser() ;
    

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    <BottomNavigationAction onClick={()=>setState("1")} label="Requests"  /></BottomNavigation>
    
      
    </div>
  <div className={classes.search} style={{display:'flex',flexDirection:'row'}}> 
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
  <InputBase  style={{width:'auto'}}
              placeholder="Search…"
              onKeyDown={handleKeyPress}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
<div
              id='response'
              style={{
                zIndex: 0,
                position: 'absolute',
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px',
              }}
            >
              <List
                component='div'
                id='result2'
                style={{ backgroundColor: 'LightGray' }}
              ></List>
            </div>
          

             <Button  onClick={handleOpen}
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<AddBoxOutlinedIcon />}
          >
            Create a group
          </Button>
          <Modal
      
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} style={{display:'flex',flexDirection:'row'}}>
           <div style={{width:'100%',height:'100%'}}>
  <div style={{position:'relative',top:'25%'}}>   <div style={{textAlign:'center',marginRight:'80px'}}  ><h2>Create your group</h2></div> 
<div style={{textAlign:'center',width:'80%'}}  >
         <Groupcreate></Groupcreate>
</div>
<div style={{textAlign:'center'}}>

</div></div>   
</div><div style={{width:'100%'}}>
<Card style={{width:'100%',height:'100%'}}>
        <CardMedia style={{width:'100%',height:'100%'}}
          className={classes.media}
          image="../assets/images/groups/group2.jpg"
          title="create a group"
        />
</Card>

</div>
          </div>
        </Fade>
      </Modal>
            </div>  </div>
       
       
       <div >
       {state == "0" && <Groups style={{display :'flex',flexDirection:'row'}} ></Groups>}
    {state == "1" &&   <GroupInvitation requests={currentuser['id']}></GroupInvitation> }</div>
        </Container>
               
    </div>
  </>
);





}