import './App.css';
import ChatApp from './views/ChatApp';
import Login from './components/Auth/Login/SignIn';
import VideoCall from './views/VideoCall'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Profile from './Profile';
import Groupe from './Groupe'

function App() {
<<<<<<< HEAD
  return <div className='App'>
   
=======
  return <div className='App' style={{backgroundColor : '#F0F2F5'}}>
>>>>>>> 720d58c176891971e6d26758f2ee181bd4958b24
     <Router>
     <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
<<<<<<< HEAD
          <Route path="/AppChat">
            <ChatApp/>
          </Route>
          <Route
path="/video"
render={(props) => <VideoCall {...props} />}
></Route>
=======
          <Route path="/Groupe">
            <Groupe/>
          </Route>
>>>>>>> 720d58c176891971e6d26758f2ee181bd4958b24
  </Router>
  </div>;
}

export default App;
