import React from 'react';
import { Cake, FindInPage, Flag, Home, HomeOutlined, Phone } from '@material-ui/icons';
import { Container, Divider, Icon, IconButton, Typography } from '@material-ui/core';
import { Col, Row } from 'react-bootstrap';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';


export default function About() {

  return (
    <div >
    <Container style={{borderRadius: '10px'  ,backgroundColor:"white",height:'400px'}}>
    <Row style={{height:'400px'}}>
    <div className="col-md-6 " style={{top:'25%'}}>
        <InfoTwoToneIcon fontSize='large' />
      <Typography variant='h5'component='h5'>
      PythonProgramming.net is a programming tutorials / educational site containing over a thousand video & text based tutorials for Python programming.
      </Typography>
    </div>
    <Divider orientation="vertical" flexItem />

    <Col md={5} style={{top:'25%'}}>
    <div className="row justify-content-center">
      <div className="col-md-4 " style={{display:"flex",flexDirection:"row" , alignItems:"center"}} >
      
      <Home color="primary" style={{marginRight:"10px"}} />
      <Typography variant="h6">
      Adress
      </Typography>
      </div>
      <div className="col-md-8 "style={{display:"flex",flexDirection:"row" , alignItems:"center"}}  >
      <Typography>
      harrison@pythonprogramming.net
      </Typography>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-md-4 " style={{display:"flex",flexDirection:"row" , alignItems:"center"}} >
      <Phone color="primary" style={{marginRight:"10px"}} />
      <Typography  variant="h6">
      website
      </Typography>
      </div>
      <div className="col-md-8 " style={{display:"flex",flexDirection:"row" , alignItems:"center"}} >
      <Typography>
      https://pythonprogramming.net/

      </Typography>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-md-4 " style={{display:"flex",flexDirection:"row"  , alignItems:"center"}}  >
      <Cake color="primary" style={{marginRight:"10px"}} />
      <Typography  variant="h6">
      Created 
      </Typography>
      </div>
      <div className="col-md-8 " style={{display:"flex",flexDirection:"row" , alignItems:"center"}}  >
      <Typography >
      8 Jan. 2020
      </Typography>
      </div>
    </div>


  </Col>
      
</Row>

           </Container>
           <Divider style={{marginTop:"20px"}}></Divider>
</div>

  );
}