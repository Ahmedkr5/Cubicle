import {
  BottomNavigation,
  BottomNavigationAction,
  Card,
  CardMedia,
  Container,
  Paper,
  Button,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import SearchAppBar from './components/Navbar/Navbar';
import authService from './services/auth.service';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

function NotFound() {
  const user = authService.getCurrentUser();

  return (
    <div style={{ backgroundColor: '#F0F2F5' }}>
      <link rel='stylesheet' href='css/bootstrap.min.css' />
      <Row>
        <SearchAppBar user={user}></SearchAppBar>
      </Row>
      <Container style={{ marginTop: '4em', maxWidth: '100%' }}>
        <Row>
          <Col
            style={{
              display: 'flex',
              marginLeft: '0px',
              justifyContent: 'center',
              height: 'auto',
            }}
          >
            <Container style={{ marginTop: '50px' }}>
              <Paper
                elevation={0}
                style={{ height: '80vh', width: '60vw', borderRadius: '10px' }}
              >
                <Card
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '10px',
                  }}
                >
                  <CardMedia
                    style={{ width: '100%', height: '75%' }}
                    image='../../assets/images/404.png'
                    title='404 not found'
                  />
                  <div style={{ textAlign: 'center' }}>
                    <h4>This page is not available</h4>
                    <h6>
                      The link may be invalid or the page may have been deleted.
                      <br />
                      Check if the link you are trying to open is correct.
                    </h6>
                  </div>
                  <Button
                    variant='contained'
                    size='large'
                    style={{
                      backgroundColor: '#1877FA',
                      color: 'white',
                      left: '43%',
                      borderRadius: '10px',
                    }}
                    onClick={() => {
                      history.push('/');
                      window.location.reload();
                    }}
                  >
                    Return to home
                  </Button>
                  <br />
                  <Button
                    size='large'
                    style={{
                      color: '#1877FA',
                      left: '48.5%',
                      borderRadius: '10px',
                    }}
                    onClick={() => {
                      history.goBack();
                    }}
                  >
                    Back
                  </Button>
                </Card>
              </Paper>
            </Container>
          </Col>
        </Row>
      </Container>

      <div className='container' id='global'></div>
    </div>
  );
}

export default NotFound;
