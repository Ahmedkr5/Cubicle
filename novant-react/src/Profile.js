import { BottomNavigation, BottomNavigationAction, Container, Divider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
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
import axios from "axios";
import swal from 'sweetalert';






function Profile(props) {
const [state, setState] = useState("0") 
const [value, setValue] = React.useState(0);
const currentuser = authService.getCurrentUser() ;
const userid = props.match.params.id ;
console.log(userid)
useEffect(() => {
  const payment_token = window.location.href
  var a = payment_token.indexOf("=")
  var b =payment_token.indexOf("&")
  console.log(b)
  if (b != -1){
  
  var tokens = payment_token.substr(0,b)
  tokens = tokens.substr(a+1)
  console.log(tokens)

  axios.post( "http://localhost:3001/users/checkpayment",{ 
    tokens,
    userid
  })
    .then((response) => {
      if(response.status == 201){
        console.log(response.data)
        swal("Error!", "Payment already exist", "error").then((value) => {
          window.location = "http://localhost:3000/profile/"+userid
      })}else
       if(response.status == 202){
        swal("Error!", "Paymee Error", "error").then((value) => {
          window.location = "http://localhost:3000/profile/"+userid
      })}else{
        swal("Good job!", "You clicked the button!", "success").then((value) => {
          window.location = "http://localhost:3000/profile/"+userid
        });
      }
      
    })
  
  }}, []);


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
                            <ProfileCard userid={userid} profileimage={user2?.profileimage} coverimage={user2?.coverimage} firstname={user2?.firstname} lastname={user2?.lastname}></ProfileCard>

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
       {currentuser['id'] == userid &&
      <BottomNavigationAction onClick={()=>setState("4")} label="Coins" icon={<ShoppingCart style={{display:'flex',width:'100%' ,flexDirection:'column'}} />} />}

    </BottomNavigation>

    {state == "0" &&  <div style={{display:'flex',width:'100%' ,flexDirection:'column'}}><ProblemFeed></ProblemFeed> <Feed></Feed> <Feed></Feed></div>}
    {state == "1" && <FriendList></FriendList>}
    {state == "2" && <Badges></Badges>}
    {state == "3" &&  <CV userid={userid}></CV> }
    {state == "5" &&  <SetAboutME userid={userid}></SetAboutME> }
    {state == "4" && <AchatCoins userid={userid}></AchatCoins>}


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
