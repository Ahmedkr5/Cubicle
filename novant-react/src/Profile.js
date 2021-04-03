import { BottomNavigation, BottomNavigationAction, Container, Divider } from "@material-ui/core";
import React, { useState } from "react";
import { FindInPage, Flag } from "@material-ui/icons";
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Col, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfileCard from "./components/Profile/ProfileCard";
import Feed from "./components/Posts/Feed";
import ConnectedList from "./components/rightSideBar/ConnectedList";
import Badges from "./Badges";
import CV from "./components/Profile/CV/CV";






function Profile() {
const [state, setState] = useState("0") 
const [value, setValue] = React.useState(0);
 return (
   
    <div style={{backgroundColor : '#EBEDF0'}}>
          <link rel="stylesheet" href="css/bootstrap.min.css"/>    
          <Row>
            <Col md={3}>
      <Sidebar></Sidebar>
            </Col>

            <Col md={6}>
                          <Container maxWidth="md">
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
    {state == "0" &&  <div style={{display:'flex' ,flexDirection:'column'}}><Feed></Feed> <Divider orientation='horizontal'/><Feed></Feed> <Feed></Feed></div>}
    {state == "2" && <Badges></Badges>}
                {state == "3" &&  <CV></CV> }


                
                </Container>
                </Col>
                <Col md={3}>
                  <ConnectedList></ConnectedList>
                </Col>
                </Row>

    </div>
  );
}

export default Profile;
