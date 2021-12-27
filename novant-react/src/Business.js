import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Divider,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Business/Feed';
import Badges from './Badges';
import RightSidebar from './components/rightSideBar/RightSidebar';
import SearchAppBar from './components/Navbar/Navbar';
import authService from './services/auth.service';
import BusinessList from './components/Business/BusinessList';
import BusinessListTabs from './components/Business/BusinessListTabs';
import Admin from './components/Business/Admin';
import UpdatedBusinessHomeFeed from './components/Posts/BusinessFeed/UpdatedBusinessHomeFeed';
import { useApi } from './hooks/useApi';
import { useQuery, gql } from '@apollo/client';
import SkeletonFeed from './components/Posts/skeletonFeed';
import useDocumentTitle from './components/useDocumentTitle';

const FEED_QUERY = gql`
  query groupPosts($businessid: [String!]) {
    businessPosts(businessid: $businessid) {
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
      business {
        id
        name
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
function Business() {
  useDocumentTitle('Business | Cubicle');
  const [state, setState] = useState('0');
  const [business, setBusiness] = useState(false);
  const [value, setValue] = React.useState(0);
  const user = authService.getCurrentUser();
  const userid = user['id'];
  const [groupProf, err, reload] = useApi('business/businesslist');
  console.log(groupProf);
  // const tab = groupProf;
  // console.log(tab);
  if (groupProf && business === false) {
    setBusiness(true);
    groupProf.map((business) => {
      groupidd.push(business['_id']);
    });
    console.log('helloooo', groupidd);
  }

  const { data, loading, error, refetch } = useQuery(FEED_QUERY, {
    variables: {
      businessid: groupidd,
    },
    pollInterval: 500,
  });

  return (
    <div style={{ backgroundColor: '#F0F2F5' }}>
      <link rel='stylesheet' href='css/bootstrap.min.css' />
      <Row>
        <SearchAppBar user={user}></SearchAppBar>
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
              height: '100%',
            }}
          >
            <Container style={{ marginLeft: '0px' }}>
              <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                showLabels
                style={{ marginBottom: '10px', borderRadius: '10px' }}
              >
                <BottomNavigationAction
                  onClick={() => setState('0')}
                  label='Business Feed'
                />
                <BottomNavigationAction
                  onClick={() => setState('1')}
                  label='Businesses'
                />
              </BottomNavigation>
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
                      {data.businessPosts.map(
                        (post) => (
                          <UpdatedBusinessHomeFeed
                            key={post.id}
                            post={post}
                            user={user}
                            business={post.business}
                          ></UpdatedBusinessHomeFeed>
                        )

                        // <Link key={link.id} link={link} />
                      )}
                    </>
                  )}
                </div>
              )}
              {state == '1' && <BusinessListTabs></BusinessListTabs>}
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

export default Business;
