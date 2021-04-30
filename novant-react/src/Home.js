import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Posts/Feed';
import UpdatedFeed from './components/Posts/updatedFeed/UpdatedFeed';
import RightSidebar from './components/rightSideBar/RightSidebar';
import SearchAppBar from './components/Navbar/Navbar';
import authService from './services/auth.service';
import ProblemFeed from './components/Posts/ProblemFeed/ProblemFeed';
import TagFilter from './components/Posts/TagFilter';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import NewProblemDialog from './components/Posts/NewProblemDialog';
import Hidden from '@material-ui/core/Hidden';
import { useQuery, gql } from '@apollo/client';
import PropTypes from 'prop-types';
import SkeletonFeed from './components/Posts/skeletonFeed';
import Editor from './components/Posts/Editor';

const useStyles = makeStyles((theme) => ({
  input: {
    paddingLeft: '15px',
    marginRight: '5px',
    marginTop: '15px',
    marginBottom: '15px',
    width: '40%',
    backgroundColor: '#F0F2F5',
    borderRadius: '15px',
  },
}));

const FEED_QUERY = gql`
  {
    posts {
      id
      type
      tags
      description
      created_at
      user {
        firstname
        lastname
        email
      }
      comments {
        id
        type
        description
        user {
          firstname
          lastname
          email
        }
      }
    }
  }
`;

function Home() {
  const { data, loading, error } = useQuery(FEED_QUERY, {
    // pollInterval: 5000,
  });

  const classes = useStyles();
  const [state, setState] = useState('0');
  const [value, setValue] = React.useState(0);
  const user = authService.getCurrentUser();

  return (
    <div style={{ backgroundColor: '#F0F2F5' }}>
      <link rel='stylesheet' href='css/bootstrap.min.css' />
      <Row>
        <SearchAppBar></SearchAppBar>
      </Row>
      <Container style={{ marginTop: '4em', maxWidth: '100%' }}>
        <Row>
          <Hidden xsDown={true}>
            <Col style={{ display: 'flex', justifyContent: 'center' }}>
              <Sidebar></Sidebar>
            </Col>
          </Hidden>

          <Col
            style={{
              display: 'flex',
              marginLeft: '0px',
              justifyContent: 'center',
              height: 'auto',
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
                    label='Feeds'
                    icon={<AddBoxOutlinedIcon />}
                  />
                  <BottomNavigationAction
                    onClick={() => setState('1')}
                    label='Problems'
                    icon={<EmojiPeopleOutlinedIcon />}
                  />
                  <BottomNavigationAction
                    onClick={() => setState('2')}
                    label='Offers'
                    icon={<WorkOutlineOutlinedIcon />}
                  />
                </BottomNavigation>
                {/* <InputBase
                  className={classes.input}
                  placeholder='Choisissez un filtre...'
                  inputProps={{ 'aria-label': 'Choisissez un filtre' }}
                /> */}
              </div>
              <TagFilter></TagFilter>
              {state == '0' && (
                <>
                  <div
                    style={{
                      display: 'flex',
                      width: 'auto',
                      flexDirection: 'column',
                    }}
                  >
                    <NewProblemDialog user={user}></NewProblemDialog>
                    {loading && (
                      <>
                        <SkeletonFeed></SkeletonFeed>{' '}
                        <SkeletonFeed></SkeletonFeed>
                      </>
                    )}
                    {error && <p style={{ color: 'red' }}>{error.message}</p>}
                    {data && (
                      <>
                        {data.posts
                          .filter((post) => post.type.includes('problem'))
                          .map(
                            (post) => (
                              <Feed
                                image='../../assets/images/users/2.jpg'
                                key={post.id}
                                post={post}
                                user={user}
                              ></Feed>
                            )

                            // <Link key={link.id} link={link} />
                          )}

                        {data.posts
                          .filter((post) => post.type.includes('text'))
                          .map(
                            (post) => (
                              <UpdatedFeed
                                image='../../assets/images/users/2.jpg'
                                key={post.id}
                                post={post}
                                user={user}
                              ></UpdatedFeed>
                            )

                            // <Link key={link.id} link={link} />
                          )}
                      </>
                    )}
                  </div>
                </>
              )}
              {state == '1' && (
                <div
                  style={{
                    display: 'flex',
                    width: 'auto',
                    flexDirection: 'column',
                  }}
                >
                  <NewProblemDialog></NewProblemDialog>
                  {loading && (
                    <>
                      <SkeletonFeed></SkeletonFeed>{' '}
                      <SkeletonFeed></SkeletonFeed>
                    </>
                  )}
                  {error && <p style={{ color: 'red' }}>{error.message}</p>}
                  {data && (
                    <>
                      {data.posts
                        .filter((post) => post.type.includes('code'))
                        .map(
                          (post) => (
                            <ProblemFeed
                              key={post.id}
                              post={post}
                              user={user}
                            ></ProblemFeed>
                          )

                          // <Link key={link.id} link={link} />
                        )}
                    </>
                  )}
                </div>
              )}
              {state == '2' && (
                <>
                  {' '}
                  <SkeletonFeed></SkeletonFeed> <Editor />
                </>
              )}
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

      <div className='container' id='global'></div>
    </div>
  );
}

export default Home;
