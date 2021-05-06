import { BottomNavigation, BottomNavigationAction, Container, Divider } from "@material-ui/core";

import React, { useState } from "react";
import { FindInPage, Flag } from "@material-ui/icons";
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Col, Row } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Posts/Feed";
import SearchAppBar from "../Navbar/Navbar";


import GroupIcon from '@material-ui/icons/Group';
import InfoIcon from '@material-ui/icons/Info';
import GroupCard from './GroupCard';
import RightSidebar from "../rightSideBar/RightSidebar";
import FriendList from "../Friends/Friendreqlist";
import Friendsdiv from "../Friends/Friendsdiv";
import About from './About';
import Members from './members';
import { useApi } from "../../hooks/useApi";

function GroupProfile(props) {
const [state, setState] = useState("0") 
const [value, setValue] = React.useState(0);

const groupid = props.match.params.id ;
const [groupProf, err1, reload1] = useApi('groups/group/'+ groupid);




console.log(groupProf?.members);
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

            <Col xs={6} style={{ display: 'flex' ,marginLeft:'0px', justifyContent: 'center'}} >
                          <Container style={{marginLeft:'0px'}}>
                            <GroupCard grpid={groupProf?._id} nom={groupProf?.groupname} owner={groupProf?.Owner} groupimage={groupProf?.groupimage}></GroupCard>

                <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
     
    
     style={{marginBottom:"10px" ,borderRadius: '10px'    }}
    >
      <BottomNavigationAction onClick={()=>setState("0")} label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction onClick={()=>setState("1")} label="Members" icon={<GroupIcon />} />
      
      <BottomNavigationAction onClick={()=>setState("2")} label="About" icon={<InfoIcon />} />
    </BottomNavigation>

    {state == "0" &&  <div style={{display:'flex',width:'100%' ,flexDirection:'column'}}><Feed></Feed> <Divider orientation='horizontal'/><Feed></Feed> <Feed></Feed></div>}
    {state == "1" && <div style={{backgroundColor:'white',borderRadius:'10px'}}> <Members member={groupProf?.members}></Members></div>}
    {state == "2" &&  <About desc={groupProf?.description} ></About> }

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

export default GroupProfile;