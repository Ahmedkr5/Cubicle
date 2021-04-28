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
import PropTypes from 'prop-types';

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

function Home() {
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
          <Hidden xsDown='true'>
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
                    width: 'auto',
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
                <div
                  style={{
                    display: 'flex',
                    width: 'auto',
                    flexDirection: 'column',
                  }}
                >
                  <NewProblemDialog></NewProblemDialog>
                  <Feed image='../../assets/images/users/2.jpg'></Feed>
                  <Feed image='../../assets/images/users/3.jpg'></Feed>
                  <Feed image='../../assets/images/users/4.jpg'></Feed>
                  <Feed image='../../assets/images/users/5.jpg'></Feed>
                  <Feed image='../../assets/images/users/6.jpg'></Feed>
                  <Feed image='../../assets/images/users/7.jpg'></Feed>
                </div>
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
                  <ProblemFeed></ProblemFeed>
                  <ProblemFeed></ProblemFeed>
                  <ProblemFeed></ProblemFeed>
                  <ProblemFeed></ProblemFeed>
                </div>
              )}
              {state == '2' && <div></div>}
            </Container>
          </Col>
          <Hidden mdDown='true'>
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
