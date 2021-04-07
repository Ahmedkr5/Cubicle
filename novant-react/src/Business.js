import { BottomNavigation, BottomNavigationAction, Container, Divider } from "@material-ui/core";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Business/Feed";
import Badges from "./Badges";
import RightSidebar from "./components/rightSideBar/RightSidebar";
import SearchAppBar from "./components/Navbar/Navbar";
import authService from "./services/auth.service";
import BusinessList from './components/Business/BusinessList';
import BusinessListTabs from './components/Business/BusinessListTabs';
import Admin from './components/Business/Admin';




function Business() {
const [state, setState] = useState("0") 
const [value, setValue] = React.useState(0);
const user = authService.getCurrentUser() ;

 return (   
   
    <div style={{backgroundColor : '#F0F2F5'}}>
        <link rel="stylesheet" href="css/bootstrap.min.css"/>   
        <Row>    
            <SearchAppBar></SearchAppBar>
        </Row> 
        <Container  style={{ marginTop:'4%',maxWidth:'100%' }}>
            <Row>
                <Col style={{ display: 'flex' , justifyContent: 'center' }}  >
                    <Sidebar></Sidebar>
                </Col>
                <Col xs={6} style={{ display: 'flex' ,marginLeft:'0px', justifyContent: 'center',height:'100%' }} >
                    <Container style={{marginLeft:'0px'}}>
                        <BottomNavigation
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                            showLabels
                            style={{marginBottom:"10px" ,borderRadius: '10px'    }}
                        > 
                            <BottomNavigationAction onClick={()=>setState("0")} label="Business Feed"/>
                            <BottomNavigationAction onClick={()=>setState("1")} label="Invitations"/>
                            <BottomNavigationAction onClick={()=>setState("2")} label="Administrate"/>
                        </BottomNavigation>
                        {state == "0" &&  <div style={{display:'flex',width:'100%' ,flexDirection:'column'}}><Feed></Feed> <Divider orientation='horizontal'/><Feed></Feed> <Feed></Feed></div>}
                        {state == "1" && <BusinessListTabs></BusinessListTabs>}
                        {state == "2" && <Admin></Admin>}
                    </Container>
                </Col>
                <Col  style={{display: 'flex' , justifyContent: 'center'}}  >
                    <RightSidebar style={{marginRight:'0px'}}></RightSidebar>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Business;
