import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Divider,
  Hidden,
} from '@material-ui/core';
import React, { useState } from 'react';
import { FindInPage, Flag } from '@material-ui/icons';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Col, Row } from 'react-bootstrap';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileCard from './components/Profile/ProfileCard';
import Feed from './components/Posts/Feed';
import Badges from './Badges';
import CV from './components/Profile/CV/CV';
import RightSidebar from './components/rightSideBar/RightSidebar';
import SearchAppBar from './components/Navbar/Navbar';
import FriendList from './components/Friends/Friendlist';
import authService from './services/auth.service';
import Grouplist from './components/Groups/Grouplist';
import Suggestionslist from './components/Groups/Suggestionslist';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import BusinessGroupDialog from './components/Posts/BusinessGroupDialog';
import { useApi } from './hooks/useApi';
import { useQuery, gql } from '@apollo/client';
import SnackbarPost from './components/Posts/SnackbarPost';
import SkeletonFeed from './components/Posts/skeletonFeed';
import UpdatedGroupFeed from './components/Posts/GroupsFeed/UpdatedGroupFeed';
import UpdatedGroupHomeFeed from './components/Posts/GroupsFeed/UpdatedGroupHomeFeed';

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
var groupidd = [];
function Groupe() {
  const [state, setState] = useState('0');
  const [group, setGroup] = useState(false);
  const [value, setValue] = React.useState(0);
  const currentuser = authService.getCurrentUser();
  const userid = currentuser['id'];
  // fetch('groups/grouplist/' + userid)
  //   .then((res) => console.log(res))
  //   .then((json) => console.log(json));
  const [groupProf, err, reload] = useApi('groups/grouplist/' + userid);
  // console.log(groupProf);
  // const tab = groupProf;
  // console.log(tab);
  if (groupProf && group === false) {
    setGroup(true);
    groupProf.map((group) => {
      groupidd.push(group['_id']);
    });
    console.log(groupidd);
  }

  const { data, loading, error, refetch } = useQuery(FEED_QUERY, {
    variables: {
      groupid: groupidd,
    },
    pollInterval: 500,
  });

  return (
    <div style={{ backgroundColor: '#F0F2F5' }}>
      <link rel='stylesheet' href='css/bootstrap.min.css' />
      <Row>
        <SearchAppBar user={currentuser}></SearchAppBar>
      </Row>
      <Container style={{ marginTop: '4em', maxWidth: '100%' }}>
        <Row>
          <Hidden xsDown={true}>
            <Col style={{ display: 'flex', justifyContent: 'center' }}>
              <Sidebar></Sidebar>
            </Col>
          </Hidden>

          <Col
            xs={6}
            style={{
              display: 'flex',
              marginLeft: '0px',
              justifyContent: 'center',
            }}
          >
            <Container style={{}}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                  borderTopRightRadius: '10px',
                  borderTopLeftRadius: '10px',
                  marginTop: '15px',
                }}
              >
                <BottomNavigation
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  style={{
                    marginBottom: '10px',
                    borderRadius: '10px',
                    width: '100%',
                  }}
                >
                  <BottomNavigationAction
                    onClick={() => setState('0')}
                    label='Your feed'
                    icon={<AddBoxOutlinedIcon />}
                  />
                  <BottomNavigationAction
                    onClick={() => setState('1')}
                    label="Groups you've joined"
                    icon={<PeopleAltOutlinedIcon />}
                  />
                  <BottomNavigationAction
                    onClick={() => setState('2')}
                    label='Discover'
                    icon={<ExploreOutlinedIcon />}
                  />
                </BottomNavigation>
              </div>
              {state == '0' && (
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                  }}
                >
                  {' '}
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
                          <UpdatedGroupHomeFeed
                            key={post.id}
                            post={post}
                            user={currentuser}
                            group={post.group}
                          ></UpdatedGroupHomeFeed>
                        )

                        // <Link key={link.id} link={link} />
                      )}
                    </>
                  )}
                </div>
              )}
              {state == '1' && <Grouplist></Grouplist>}
              {state == '2' && <Suggestionslist></Suggestionslist>}
            </Container>
          </Col>
          <Hidden mdDown={true}>
            <Col
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <RightSidebar style={{ marginRight: '0px' }}></RightSidebar>
            </Col>
          </Hidden>
        </Row>
      </Container>
    </div>
  );
}

export default Groupe;
