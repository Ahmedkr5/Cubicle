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
import Suggestions from './Suggestions';
import groupService from '../../services/group-service';
import { useApi } from '../../hooks/useApi';



 



  export default function  Suggestionslist() {
    const [groupProf, err, reload] = useApi('groups/grouplist/');
    console.log(groupProf)
return(<>
    
       
       {groupProf?.map((msg) => (
       <div style={{display:'flex',flexDirection:'row',flexFlow:'wrap',justifyContent:'space-around'}}>
<Suggestions image={msg.groupimage} title={msg.groupname}></Suggestions>

       </div>
          ))   }
               
   
  </>
);





}