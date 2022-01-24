// import React, { lazy, Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import ChatApp from './views/ChatApp';
import Login from './components/Auth/SignUp/SignUp';
import VideoCall from './views/VideoCall';
import Meet from './views/Meet';

import Profile from './Profile';
import Groupe from './Groupe';
import Home from './Home';
import GroupProfile from './components/Groups/GroupProfile';
import Business from './Business';
import ErrorPage from './404';
import Particulier from './components/Auth/SignUp/Particulier';
import BusinessProfile from './components/Business/BusinessProfile';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className='App' style={{ backgroundColor: '#F0F2F5' }}>
      <Helmet>
        <meta charSet='utf-8' />
        <meta
          name='description'
          content='Cubicle is the sweet spot between social networking and collaboration you can easily find a job , learn problem solving and share with others- accomplish it all with Cubicle'
        />
        <link rel='canonical' href='http://localhost:3000/' />
      </Helmet>
      <Router>
        <Switch>
          <Route
            path='/profile/:id'
            render={(props) => {
              return <Profile {...props} />;
            }}
          />
          <Route
            path='/GroupProfile/:id'
            render={(props) => {
              return <GroupProfile {...props} />;
            }}
          />
          <Route path='/auth'>
            <Login />
          </Route>
          <Route path='/AppChat'>
            <ChatApp />
          </Route>
          <Route
            path='/video/:userck'
            render={(props) => <VideoCall {...props} />}
          ></Route>
          <Route
            path='/meet/:userck'
            render={(props) => <Meet {...props} />}
          ></Route>
          <Route path='/Groupe'>
            <Groupe />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/Business'>
            <Business />
          </Route>
          <Route
            path='/BusinessProfile/:id'
            render={(props) => {
              return <BusinessProfile {...props} />;
            }}
          />
          <Route path='*' component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
