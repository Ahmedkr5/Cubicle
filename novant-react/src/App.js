import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const ChatApp = React.lazy(() => import('./views/ChatApp'));
const Login = React.lazy(() => import('./components/Auth/SignUp/SignUp'));
const VideoCall = React.lazy(() => import('./views/VideoCall'));
const Meet = React.lazy(() => import('./views/Meet'));

const Profile = React.lazy(() => import('./Profile'));
const Groupe = React.lazy(() => import('./Groupe'));
const Home = React.lazy(() => import('./Home'));
const GroupProfile = React.lazy(() =>
  import('./components/Groups/GroupProfile')
);
const Business = React.lazy(() => import('./Business'));
const Particulier = React.lazy(() =>
  import('./components/Auth/SignUp/Particulier')
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='App' style={{ backgroundColor: '#F0F2F5' }}>
        <Router>
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
          <Route path='/Home'>
            <Home />
          </Route>

          <Route path='/Business'>
            <Business />
          </Route>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
