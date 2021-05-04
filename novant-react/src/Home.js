import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from '@material-ui/core';
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
import SkeletonFeed from './components/Posts/skeletonFeed';
import Editor from './components/Posts/Editor';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import SnackbarPost from './components/Posts/SnackbarPost';
import StillEmtySVG from './components/Posts/updatedFeed/StillEmptySVG';

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
    }
  }
`;

function Home() {
  const { data, loading, error } = useQuery(FEED_QUERY, {
    pollInterval: 5000,
  });
  const [state, setState] = useState('0');
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [offer, setOffer] = React.useState(0);

  const handleCallback = (childData) => {
    setOpen(childData);
  };

  const handleCallbackDialog = (childData) => {
    setOpenDialog(childData);
  };

  const handleCallbackSnackbar = (childData) => {
    setOpenSnackbar(childData);
  };

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
                    if (open === false) {
                      setValue(newValue);
                    } else {
                      setOpenSnackbar(true);
                    }
                  }}
                  style={{
                    marginBottom: '10px',
                    borderRadius: '10px',
                    width: '100%',
                  }}
                >
                  <BottomNavigationAction
                    onClick={() => {
                      if (!open) {
                        setState('0');
                      }
                    }}
                    label='Feeds'
                    icon={<AddBoxOutlinedIcon />}
                  />
                  <BottomNavigationAction
                    onClick={() => {
                      if (!open) {
                        setState('1');
                      }
                    }}
                    label='Problems'
                    icon={<EmojiPeopleOutlinedIcon />}
                  />
                  <BottomNavigationAction
                    onClick={() => {
                      if (open === false) {
                        setState('2');
                      }
                    }}
                    label='Offers'
                    icon={<WorkOutlineOutlinedIcon />}
                  />
                </BottomNavigation>
                {openSnackbar && (
                  <SnackbarPost
                    parentCallbackSnackbar={handleCallbackSnackbar}
                    message={'You are editing a new post ✍🏻'}
                  />
                )}
                {/* <InputBase
                  className={classes.input}
                  placeholder='Choisissez un filtre...'
                  inputProps={{ 'aria-label': 'Choisissez un filtre' }}
                /> */}
              </div>
              <TagFilter></TagFilter>
              {state === '0' && (
                <>
                  <div
                    style={{
                      display: 'flex',
                      width: 'auto',
                      flexDirection: 'column',
                    }}
                  >
                    <NewProblemDialog
                      parentCallback={handleCallback}
                      parentCallbackDialog={handleCallbackDialog}
                      user={user}
                    ></NewProblemDialog>
                    {loading && (
                      <>
                        <SkeletonFeed></SkeletonFeed>{' '}
                        <SkeletonFeed></SkeletonFeed>
                      </>
                    )}
                    {error && <p style={{ color: 'red' }}>{error.message}</p>}
                    {data && (
                      <>
                        {/* {data.posts
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
                          )} */}

                        {data.posts
                          .filter((post) => post.type.includes('Feed'))
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
              {state === '1' && (
                <div
                  style={{
                    display: 'flex',
                    width: 'auto',
                    flexDirection: 'column',
                  }}
                >
                  <NewProblemDialog
                    parentCallback={handleCallback}
                    parentCallbackDialog={handleCallbackDialog}
                    user={user}
                  ></NewProblemDialog>
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
                        .filter((post) => post.type.includes('Problem'))
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
              )}
              {state === '2' && (
                <>
                  <NewProblemDialog
                    parentCallback={handleCallback}
                    parentCallbackDialog={handleCallbackDialog}
                    user={user}
                  ></NewProblemDialog>{' '}
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
                        .filter((post) => post.type.includes('Offer'))
                        .map(
                          (post) => {
                            setOffer(offer++);
                            <UpdatedFeed
                              image='../../assets/images/users/2.jpg'
                              key={post.id}
                              post={post}
                              user={user}
                            ></UpdatedFeed>;
                          }

                          // <Link key={link.id} link={link} />
                        )}
                      {offer === 0 ? <StillEmtySVG /> : null}
                    </>
                  )}
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
