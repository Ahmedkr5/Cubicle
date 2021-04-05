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





function Profile() {
const [state, setState] = useState("0") 
const [value, setValue] = React.useState(0);
 return (
   
    <div style={{backgroundColor : '#EBEDF0'}}>
          <link rel="stylesheet" href="css/bootstrap.min.css"/>   
          <Row>
          <SearchAppBar></SearchAppBar>
            </Row> 
          <Row style={{marginTop:'4%'}}>
            <Col md={3}>
      <Sidebar></Sidebar>
            </Col>

            <Col md={6}>
                          <Container style={{marginLeft:'0px',width:'100%'}}>
                            <ProfileCard></ProfileCard>

                <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    
     style={{marginBottom:"10px" ,borderRadius: '10px'    }}
    >
      <BottomNavigationAction onClick={()=>setState("0")} label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction onClick={()=>setState("1")} label="Friends" icon={<FavoriteIcon />} />
      <BottomNavigationAction onClick={()=>setState("2")} label="Badges" icon={<Flag />} />
      <BottomNavigationAction onClick={()=>setState("3")} label="CV" icon={<FindInPage />} />
    </BottomNavigation>

    {state == "0" &&  <div style={{display:'flex',width:'100%' ,flexDirection:'column'}}><Feed></Feed> <Divider orientation='horizontal'/><Feed></Feed> <Feed></Feed></div>}
    {state == "2" && <Badges></Badges>}
    {state == "3" &&  <CV></CV> }

                </Container>
                </Col>
                <Col md={3}>
                  <RightSidebar></RightSidebar>
                </Col>
                </Row>

    </div>
  );
}

export default Profile;
