import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Divider,
} from '@material-ui/core';

import React, { useState } from 'react';
import { FindInPage, Flag } from '@material-ui/icons';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import Feed from '../Posts/Feed';
import SearchAppBar from '../Navbar/Navbar';
import authService from '../../services/auth.service';
import { Settings, ShoppingCart } from '@material-ui/icons';
import GroupIcon from '@material-ui/icons/Group';
import InfoIcon from '@material-ui/icons/Info';
import GroupCard from './GroupCard';
import RightSidebar from '../rightSideBar/RightSidebar';
import FriendList from '../Friends/Friendreqlist';
import Friendsdiv from '../Friends/Friendsdiv';
import About from './About';
import Members from './members';
import { useApi } from '../../hooks/useApi';
import Config from './config';
import BusinessGroupDialog from '../Posts/BusinessGroupDialog';
import { useQuery, gql } from '@apollo/client';
import SnackbarPost from '../../components/Posts/SnackbarPost';
import SkeletonFeed from '../../components/Posts/skeletonFeed';
import UpdatedGroupFeed from '../Posts/GroupsFeed/UpdatedGroupFeed';
import 'react-jinke-music-player/assets/index.css';
import MusicCover from './python.png';
import Podcast from './pythonpodcast.mp3';
import MusicCover2 from './JohnWick.jpg';
import Castle_Vania from './JohnWick.mp3';
import Geazy from './geazy.mp3';
import ReactJKMusicPlayer from 'react-jinke-music-player';
const FEED_QUERY = gql`
  query groupPosts($groupid: [String!]) {
    groupPosts(groupid: $groupid) {
      id
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
      group {
        id
        groupname
      }
      likesList {
        id
        firstname
        lastname
      }
    }
  }
`;

function GroupProfile(props) {
  // console.log(`test ${data?.groupPosts}`);
  const groupid = props.match.params.id;
  const groupidd = [props.match.params.id];

  const { data, loading, error, refetch } = useQuery(FEED_QUERY, {
    variables: {
      groupid: groupidd,
    },
    pollInterval: 5000,
  });
  const [state, setState] = useState('0');
  const [value, setValue] = React.useState(0);
  const currentuser = authService.getCurrentUser();
  const [groupProf, err1, reload1] = useApi('groups/group/' + groupid);
  const [mem, setMem] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [offer, setOffer] = React.useState(0);
  const user = authService.getCurrentUser();

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

  const handleRefetch = () => {
    refetch();
  };
  const audiolist = [
    {
      cover: MusicCover,
      musicSrc: Podcast,
      name: 'Learning Python for Beginners-Podcast',
      singer: 'By Hamza Safraou',
    },
    {
      cover: MusicCover2,
      musicSrc: Castle_Vania,
      name: 'Le Castle Vania - John Wick Medley',
      singer: 'Shots Fired',
    },
  ];

  return (
    <div style={{ backgroundColor: '#F0F2F5' }}>
      <link rel='stylesheet' href='css/bootstrap.min.css' />
      <Row>
        <SearchAppBar></SearchAppBar>
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
              <GroupCard
                grpid={groupProf?._id}
                mem={groupProf?.members}
                nom={groupProf?.groupname}
                owner={groupProf?.Owner}
                groupimage={groupProf?.groupimage}
              ></GroupCard>
              <ReactJKMusicPlayer
                audioLists={audiolist}
                autoPlay={false}
              ></ReactJKMusicPlayer>
              <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                  if (open === false) {
                    setValue(newValue);
                  } else {
                    setOpenSnackbar(true);
                  }
                }}
                style={{ marginBottom: '10px', borderRadius: '10px' }}
              >
                {groupProf?.members?.find((m) => m === currentuser['id']) ? (
                  //currentuser['id'] in props?.groupProf?.members.map(m=>(m)) &&
                  <BottomNavigationAction
                    onClick={() => {
                      if (open === false) {
                        setState('0');
                        refetch();
                      }
                    }}
                    label='Recents'
                    icon={<RestoreIcon />}
                  />
                ) : null}
                <BottomNavigationAction
                  onClick={() => {
                    if (open === false) {
                      setState('1');
                      refetch();
                    }
                  }}
                  label='Members'
                  icon={<GroupIcon />}
                />

                <BottomNavigationAction
                  onClick={() => {
                    if (open === false) {
                      setState('2');
                      refetch();
                    }
                  }}
                  label='About'
                  icon={<InfoIcon />}
                />
                {currentuser['id'] === groupProf?.Owner && (
                  <BottomNavigationAction
                    onClick={() => setState('3')}
                    label='Settings'
                    icon={<Settings />}
                  />
                )}
              </BottomNavigation>
              {openSnackbar && (
                <SnackbarPost
                  parentCallbackSnackbar={handleCallbackSnackbar}
                  message={'You are editing a new post ✍🏻'}
                />
              )}

              {state == '0' &&
                groupProf?.members?.find((m) => m === currentuser['id']) && (
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      flexDirection: 'column',
                    }}
                  >
                    {' '}
                    <BusinessGroupDialog
                      parentRefetch={handleRefetch}
                      CallbackAddedPost={handleCallbackAddedPost}
                      parentCallback={handleCallback}
                      parentCallbackDialog={handleCallbackDialog}
                      user={user}
                      groupid={groupid}
                    ></BusinessGroupDialog>{' '}
                    {loading && (
                      <>
                        <SkeletonFeed></SkeletonFeed>{' '}
                        <SkeletonFeed></SkeletonFeed>
                      </>
                    )}
                    {error && <p style={{ color: 'red' }}>{error.message}</p>}
                    {data && (
                      <>
                        {data.groupPosts.map(
                          (post) => (
                            <UpdatedGroupFeed
                              key={post.id}
                              post={post}
                              user={user}
                            ></UpdatedGroupFeed>
                          )

                          // <Link key={link.id} link={link} />
                        )}
                      </>
                    )}
                  </div>
                )}
              {state == '1' && (
                <div style={{ backgroundColor: 'white', borderRadius: '10px' }}>
                  {' '}
                  <Members
                    id={groupProf?._id}
                    member={groupProf?.members}
                    owner={groupProf?.Owner}
                  ></Members>
                </div>
              )}
              {state == '2' && <About desc={groupProf?.description}></About>}
              {state == '3' && (
                <Config
                  nom={groupProf?.groupname}
                  desc={groupProf?.description}
                  id={groupProf?._id}
                ></Config>
              )}
            </Container>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <RightSidebar style={{ marginRight: '0px' }}></RightSidebar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GroupProfile;
