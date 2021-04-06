import { BottomNavigation, BottomNavigationAction, Container, Divider } from "@material-ui/core";
import React, { useState } from "react";
import { FindInPage, Flag } from "@material-ui/icons";
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Col, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfileCard from "./components/Profile/ProfileCard";
import Feed from "./components/Posts/Feed";
import Badges from "./Badges";
import CV from "./components/Profile/CV/CV";
import RightSidebar from "./components/rightSideBar/RightSidebar";
import SearchAppBar from "./components/Navbar/Navbar";
import FriendList from "./components/Friends/Friendlist";
import authService from "./services/auth.service";
import Grouplist from './components/Groups/Grouplist';




function Groupe() {
const [state, setState] = useState("0") 
const [value, setValue] = React.useState(0);
const user = authService.getCurrentUser() ;

 return (   
   
    <div style={{backgroundColor : '#F0F2F5'}}>
          <link rel="stylesheet" href="css/bootstrap.min.css"/>   
          <Row>
            
          <SearchAppBar></SearchAppBar>
            </Row> 
            <Container  style={{marginTop:'4%',maxWidth:'100%'}}>
          <Row  >
            <Col style={{ display: 'flex' , justifyContent: 'center'}}  >
      <Sidebar></Sidebar>
            </Col>

            <Col xs={6} style={{ display: 'flex' ,marginLeft:'0px', justifyContent: 'center',height:'100%'}} >
                          <Container style={{marginLeft:'0px'}}>
                            

                <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    
     style={{marginBottom:"10px" ,borderRadius: '10px'    }}
    >
      <BottomNavigationAction onClick={()=>setState("0")} label="Your feed" />
      <BottomNavigationAction onClick={()=>setState("1")} label="Groups you've joined"  />
      <BottomNavigationAction onClick={()=>setState("2")} label="Discover"  />
      
    </BottomNavigation>

    {state == "0" &&  <div style={{display:'flex',width:'100%' ,flexDirection:'column'}}><Feed></Feed> <Divider orientation='horizontal'/><Feed></Feed> <Feed></Feed></div>}
    {state == "1" && <Grouplist></Grouplist>}
    {state == "2" && <Badges></Badges>}
   

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

export default Groupe;
