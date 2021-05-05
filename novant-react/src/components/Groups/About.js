import React from 'react';
import { Cake, FindInPage, Flag, Home, HomeOutlined, Phone } from '@material-ui/icons';
import { Container, Divider, Icon, IconButton, Typography } from '@material-ui/core';
import { Col, Row } from 'react-bootstrap';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';


export default function About(props) {

  return (
    <div >
    <Container style={{borderRadius: '10px'  ,backgroundColor:"white",height:'400px'}}>
    <Row style={{height:'400px'}}>
    <div style={{marginTop:'80px'}}>
        <InfoTwoToneIcon fontSize='large' /><b>Description</b>
      <Typography variant='h6'component='h6'>
      {props?.desc}
      </Typography>
    </div>
    

 
      
</Row>

           </Container>
           
</div>

  );
}