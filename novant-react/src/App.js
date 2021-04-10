import './App.css';
import ChatApp from './views/ChatApp';
import Login from './components/Auth/SignUp/SignUp';
import VideoCall from './views/VideoCall';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './Profile';
import Groupe from './Groupe';
import Home from './Home';
import GroupProfile from './components/Groups/GroupProfile';
import Business from './Business';
import Particulier from './components/Auth/SignUp/Particulier';

function App() {
  return (
    <div className='App' style={{ backgroundColor: '#F0F2F5' }}>
      <Router>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/auth'>
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
        <Route path='/Home'>
          <Home />
        </Route>
        <Route path='/GroupProfile'>
          <GroupProfile />
        </Route>
        <Route path='/Business'>
          <Business />
        </Route>
      </Router>
    </div>
  );
}

export default App;
