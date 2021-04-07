import './App.css';
import ChatApp from './views/ChatApp';
import Login from './components/Auth/Login/SignIn';
import VideoCall from './views/VideoCall';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './Profile';
import Groupe from './Groupe';
import GroupProfile from './components/Groups/GroupProfile'
function App() {
  return (
    <div className='App' style={{ backgroundColor: '#F0F2F5' }}>
      <Router>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/AppChat'>
          <ChatApp />
        </Route>
        <Route
          path='/video'
          render={(props) => <VideoCall {...props} />}
        ></Route>
        <Route path='/Groupe'>
          <Groupe />
        </Route>
        <Route path='/GroupProfile'>
          <GroupProfile />
        </Route>
      </Router>
    </div>
  );
}

export default App;
