import { BottomNavigation, BottomNavigationAction, Container, Divider } from "@material-ui/core";
import React, { useState } from "react";
import { FindInPage, Flag, Settings, ShoppingCart } from "@material-ui/icons";
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Col, Row } from "react-bootstrap";
import Sidebar from "./components/Sidebar/Sidebar";
import ProfileCard from "./components/Profile/ProfileCard";
import Feed from "./components/Posts/Feed";
import ProblemFeed from "./components/Posts/ProblemFeed/ProblemFeed";
import Badges from "./Badges";
import CV from "./components/Profile/CV/CV";
import RightSidebar from "./components/rightSideBar/RightSidebar";
import SearchAppBar from "./components/Navbar/Navbar";
import FriendList from "./components/Friends/Friendlist";
import authService from "./services/auth.service";
import AchatCoins from "./components/Coins/AchatCoins";
import SetAboutME from "./components/Profile/SetAboutME";
import { useApi } from "./hooks/useApi";





function Profile(props) {
const [state, setState] = useState("0") 
const [value, setValue] = React.useState(0);
const currentuser = authService.getCurrentUser() ;
const userid = props.match.params.id ;
const [user2,err,reload] = useApi('users/'+userid);
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
                            <ProfileCard profileimage={user2?.profileimage} coverimage={user2?.coverimage} firstname={user2?.firstname} lastname={user2?.lastname}></ProfileCard>

                <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    
     style={{marginBottom:"10px" , borderBottomRightRadius:"15px",borderBottomLeftRadius:"15px" }}
    >
      <BottomNavigationAction onClick={()=>setState("0")} label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction onClick={()=>setState("1")} label="Friends" icon={<FavoriteIcon />} />
      <BottomNavigationAction onClick={()=>setState("2")} label="Badges" icon={<Flag />} />
      <BottomNavigationAction onClick={()=>setState("3")} label="CV" icon={<FindInPage />} />
      {currentuser['id'] == userid &&
      <BottomNavigationAction onClick={()=>setState("5")} label="Settings" icon={<Settings />} />}
      <BottomNavigationAction onClick={()=>setState("4")} label="Coins" icon={<ShoppingCart style={{display:'flex',width:'100%' ,flexDirection:'column'}} />} />

    </BottomNavigation>

    {state == "0" &&  <div style={{display:'flex',width:'100%' ,flexDirection:'column'}}><ProblemFeed></ProblemFeed> <Feed></Feed> <Feed></Feed></div>}
    {state == "1" && <FriendList></FriendList>}
    {state == "2" && <Badges></Badges>}
    {state == "3" &&  <CV userid={userid}></CV> }
    {state == "5" &&  <SetAboutME userid={userid}></SetAboutME> }
    {state == "4" && <AchatCoins></AchatCoins>}


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

export default Profile;
