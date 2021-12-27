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
import Sidebar from './components/Sidebar/Sidebar';
import ProfileCard from './components/Profile/ProfileCard';
import RightSidebar from './components/rightSideBar/RightSidebar';
import SearchAppBar from './components/Navbar/Navbar';
import authService from './services/auth.service';
import AchatCoins from './components/Coins/AchatCoins';
import ExchangeCoins from './components/Coins/ExchangeCoins';
import Transactions from './components/Coins/Transactions';
import useDocumentTitle from './components/useDocumentTitle';

function Coins() {
  useDocumentTitle('Coins | Cubicle');
  const [state, setState] = useState('0');
  const [value, setValue] = React.useState(0);
  const user = authService.getCurrentUser();

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
            }}
          >
            <Container style={{ marginLeft: '0px' }}>
              <ProfileCard
                firstname={user.firstname}
                lastname={user.lastname}
              ></ProfileCard>

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
                  label='Buy Coins'
                  icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                  onClick={() => setState('1')}
                  label='Exchange Coins'
                  icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                  onClick={() => setState('2')}
                  label='Transactions'
                  icon={<Flag />}
                />
              </BottomNavigation>
              {state == '0' && <AchatCoins></AchatCoins>}
              {state == '1' && <ExchangeCoins></ExchangeCoins>}
              {state == '2' && <Transactions></Transactions>}
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

export default Coins;
