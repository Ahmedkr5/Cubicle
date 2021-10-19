import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Divider,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { FindInPage, Flag, Settings, ShoppingCart } from '@material-ui/icons';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Col, Row } from 'react-bootstrap';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileCard from './components/Profile/ProfileCard';
import Feed from './components/Posts/Feed';
import ProblemFeed from './components/Posts/ProblemFeed/ProblemFeed';
import Badges from './Badges';
import CV from './components/Profile/CV/CV';
import RightSidebar from './components/rightSideBar/RightSidebar';
import SearchAppBar from './components/Navbar/Navbar';
import FriendList from './components/Friends/Friendlist';
import authService from './services/auth.service';
import AchatCoins from './components/Coins/AchatCoins';
import SetAboutME from './components/Profile/SetAboutME';
import { useApi } from './hooks/useApi';
import axios from 'axios';
import swal from 'sweetalert';
import { useQuery, gql } from '@apollo/client';
import SkeletonFeed from './components/Posts/skeletonFeed';
import SnackbarPost from './components/Posts/SnackbarPost';
import UpdatedFeed from './components/Posts/updatedFeed/UpdatedFeed';
import NewProblemDialog from './components/Posts/NewProblemDialog';

const FEED_QUERY = gql`
  query postsByUser($userId: ID) {
    postsByUser(userId: $userId) {
      id
      type
      tags
      description
      created_at
      user {
        id
        firstname
        lastname
        email
        profileimage
      }
      comments {
        id
        type
        description
        created_at
        user {
          firstname
          lastname
          email
          profileimage
        }
      }
      likesList {
        id
        firstname
        lastname
      }
    }
  }
`;

function Profile(props) {
  const currentuser = authService.getCurrentUser();
  const userid = props.match.params.id;
  const { data, loading, error, refetch } = useQuery(FEED_QUERY, {
    variables: {
      userId: userid,
    },
    pollInterval: 5000,
  });
  const [state, setState] = useState('0');
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const  [friendcomp,setFriendcomp] = React.useState([]);
  const  [Loading,setLoading] = React.useState(false);
  const handleCallback = (childData) => {
    setOpen(childData);
  };

  const handleCallbackDialog = (childData) => {
    setOpenDialog(childData);
  };

  const handleCallbackSnackbar = (childData) => {
    setOpenSnackbar(childData);
  };

  const handleCallbackAddedPost = (childDatat) => {
    refetch();
  };

  useEffect(() => {
    const payment_token = window.location.href;
    var a = payment_token.indexOf('=');
    var b = payment_token.indexOf('&');
    console.log(b);
    if (b != -1) {
      var tokens = payment_token.substr(0, b);
      tokens = tokens.substr(a + 1);
      console.log(tokens);

      axios
        .post('http://localhost:3001/users/checkpayment', {
          tokens,
          userid,
        })
        .then((response) => {
          if (response.status == 201) {
            console.log(response.data);
            swal('Error!', 'Payment already exist', 'error').then((value) => {
              window.location = 'http://localhost:3000/profile/' + userid;
            });
          } else if (response.status == 202) {
            swal('Error!', 'Paymee Error', 'error').then((value) => {
              window.location = 'http://localhost:3000/profile/' + userid;
            });
          } else {
            swal('Good job!', 'You clicked the button!', 'success').then(
              (value) => {
                window.location = 'http://localhost:3000/profile/' + userid;
              }
            );
          }
        });
    }
  }, []);

 
  useEffect(() => {
       
      
    
    axios
      .get('http://localhost:3001/users/')
    
      .then((res) => {
         setFriendcomp(res.data?.filter((m)=>currentuser?.friends.includes(m._id)))
       
      });
  
  }, );
  const [user2, err, reload] = useApi('users/' + userid);
  return (
    <div style={{ backgroundColor: '#F0F2F5' }}>
      <link rel='stylesheet' href='css/bootstrap.min.css' />

      <Row>
        <SearchAppBar user={currentuser}></SearchAppBar>
      </Row>
      <Container style={{ marginTop: '4%', maxWidth: '100%' }}>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <Sidebar></Sidebar>
          </Col>

          <Col
            xs={6}
            style={{
              display: 'flex',
              marginLeft: '0px',
              justifyContent: 'center',
            }}
          >
            <Container style={{ marginLeft: '0px' }}>
              <ProfileCard
                userid={userid}
                profileimage={user2?.profileimage}
                coverimage={user2?.coverimage}
                firstname={user2?.firstname}
                lastname={user2?.lastname}
                friends={user2?.friends}
                friendRequests={user2?.friendRequests}
              ></ProfileCard>

              <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                style={{
                  marginBottom: '10px',
                  borderBottomRightRadius: '15px',
                  borderBottomLeftRadius: '15px',
                }}
              >
                <BottomNavigationAction
                  onClick={() => {
                    if (!open) {
                      setState('0');
                      refetch();
                    }
                  }}
                  label='Recents'
                  icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                  onClick={() => {
                    if (!open) {
                      setState('1');
                      refetch();
                    }
                  }}
                  label='Friends'
                  icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                  onClick={() => {
                    if (!open) {
                      setState('2');
                      refetch();
                    }
                  }}
                  label='Badges'
                  icon={<Flag />}
                />
                <BottomNavigationAction
                  onClick={() => {
                    if (!open) {
                      setState('3');
                      refetch();
                    }
                  }}
                  label='CV'
                  icon={<FindInPage />}
                />
                {currentuser['id'] == userid && (
                  <BottomNavigationAction
                    onClick={() => {
                      if (!open) {
                        setState('5');
                        refetch();
                      }
                    }}
                    label='Settings'
                    icon={<Settings />}
                  />
                )}
                {currentuser['id'] == userid && (
                  <BottomNavigationAction
                    onClick={() => {
                      if (!open) {
                        setState('4');
                        refetch();
                      }
                    }}
                    label='Coins'
                    icon={
                      <ShoppingCart
                        style={{
                          display: 'flex',
                          width: '100%',
                          flexDirection: 'column',
                        }}
                      />
                    }
                  />
                )}
              </BottomNavigation>
              {openSnackbar && (
                <SnackbarPost
                  parentCallbackSnackbar={handleCallbackSnackbar}
                  message={'You are editing a new post ✍🏻'}
                />
              )}

              {state == '0' && (
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                  }}
                >
                  {currentuser['id'] == userid && (
                    <NewProblemDialog
                      CallbackAddedPost={handleCallbackAddedPost}
                      parentCallback={handleCallback}
                      parentCallbackDialog={handleCallbackDialog}
                      user={currentuser}
                    ></NewProblemDialog>
                  )}

                  {loading && (
                    <>
                      <SkeletonFeed></SkeletonFeed>{' '}
                      <SkeletonFeed></SkeletonFeed>
                    </>
                  )}
                  {error && <p style={{ color: 'red' }}>{error.message}</p>}
                  {data && (
                    <>
                      {data.postsByUser.map(
                        (post) => (
                          <UpdatedFeed
                            image='../../assets/images/users/2.jpg'
                            key={post.id}
                            post={post}
                            user={currentuser}
                          ></UpdatedFeed>
                        )

                        // <Link key={link.id} link={link} />
                      )}
                    </>
                  )}
                </div>
              )}
              {state == '1' && (
                <FriendList friends={user2?.friends}></FriendList>
              )}
              {state == '2' && <Badges></Badges>}
              {state == '3' && <CV userid={userid}></CV>}
              {state == '5' && <SetAboutME userid={userid}></SetAboutME>}
              {state == '4' && <AchatCoins userid={userid}></AchatCoins>}
            </Container>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <RightSidebar friends={friendcomp} style={{ marginRight: '0px' }}></RightSidebar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
