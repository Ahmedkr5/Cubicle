import React from 'react';
import { Cake, FindInPage, Flag, Home, HomeOutlined, Phone } from '@material-ui/icons';
import { Container, Divider, Icon, IconButton, Typography } from '@material-ui/core';
import { Col, Row } from 'react-bootstrap';
import authService from '../../../services/auth.service';
import experienceService from '../../../services/experience.service';
import { useApi } from '../../../hooks/useApi';


export default function Aboutme(props) {
  const user = useApi('users/'+ props.userid); ;
  return (
    <div>
    <Container style={{borderRadius: '10px'  ,backgroundColor:"white"}}>
    <Row>
    <div className="col-md-6 " >
      <Typography>
      {user[0]?.description}
      </Typography>
    </div>
    <Divider orientation="vertical" flexItem />

    <Col md={5}>
    <div className="row justify-content-center">
      <div className="col-md-4 " style={{display:"flex",flexDirection:"row" , alignItems:"center"}} >
      
      <Home color="primary" style={{marginRight:"10px"}} />
      <Typography variant="h6">
      Adress
      </Typography>
      </div>
      <div className="col-md-8 "style={{display:"flex",flexDirection:"row" , alignItems:"center"}}  >
      <Typography>
      {user[0]?.adresse}
      </Typography>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-md-4 " style={{display:"flex",flexDirection:"row" , alignItems:"center"}} >
      <Phone color="primary" style={{marginRight:"10px"}} />
      <Typography  variant="h6">
      Phone
      </Typography>
      </div>
      <div className="col-md-8 " style={{display:"flex",flexDirection:"row" , alignItems:"center"}} >
      <Typography>
      {user[0]?.phone}
      </Typography>
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-md-4 " style={{display:"flex",flexDirection:"row"  , alignItems:"center"}}  >
      <Cake color="primary" style={{marginRight:"10px"}} />
      <Typography  variant="h6">
      Birthday
      </Typography>
      </div>
      <div className="col-md-8 " style={{display:"flex",flexDirection:"row" , alignItems:"center"}}  >
      <Typography>
      {user[0]?.datenaissance}
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