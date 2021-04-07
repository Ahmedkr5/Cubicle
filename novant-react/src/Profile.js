import { BottomNavigation, BottomNavigationAction, Container, Divider } from "@material-ui/core";
import React, { useState } from "react";
import { FindInPage, Flag, ShoppingCart } from "@material-ui/icons";
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





function Profile() {
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

            <Col xs={6} style={{ display: 'flex' ,marginLeft:'0px', justifyContent: 'center'}} >
                          <Container style={{marginLeft:'0px'}}>
                            <ProfileCard firstname={user.firstname} lastname={user.lastname}></ProfileCard>

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
      <BottomNavigationAction onClick={()=>setState("4")} label="Coins" icon={<ShoppingCart style={{display:'flex',width:'100%' ,flexDirection:'column'}} />} />

    </BottomNavigation>

    {state == "0" &&  <div style={{display:'flex',width:'100%' ,flexDirection:'column'}}><ProblemFeed></ProblemFeed> <Feed></Feed> <Feed></Feed></div>}
    {state == "1" && <FriendList></FriendList>}
    {state == "2" && <Badges></Badges>}
    {state == "3" &&  <CV userid={user.id}></CV> }
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
