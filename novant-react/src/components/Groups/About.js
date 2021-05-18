import React from 'react';
import { Cake, FindInPage, Flag, Home, HomeOutlined, Phone } from '@material-ui/icons';
import { Container, Divider, Icon, IconButton, Typography } from '@material-ui/core';
import { Col, Row } from 'react-bootstrap';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import AccessTimeTwoToneIcon from '@material-ui/icons/AccessTimeTwoTone';

import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import Clipboardbutton from './clipboardbutton';
export default function About(props) {

  return (
    <div >
    <Container style={{borderRadius: '10px'  ,backgroundColor:"white",height:'400px'}}>
    <Row style={{height:'400px'}}>
    <div style={{marginTop:'40px'}}><h4 style={{color:'blue',fontFamily:'Times New Roman',fontWeight:'bold'}}>About this group</h4><Clipboardbutton></Clipboardbutton>
    <hr></hr>
     
   
     
     
      <VisibilityTwoToneIcon fontSize='large'/> 
      <Typography variant='h6'component='h6'>
      Visibilty 
      </Typography>Anyone can find this group
      <br></br>
       <AccessTimeTwoToneIcon fontSize='large'/> 
       <Typography variant='h6'component='h6'>
       History  
      </Typography>
      Group created on 5 Mai 2021
       <br></br>
        <InfoTwoToneIcon fontSize='large' />

      <Typography variant='h6'component='h6'>
      Description
      </Typography>{props?.desc}
      
    </div>
    

 
      
</Row>

           </Container>
           
</div>

  );
}