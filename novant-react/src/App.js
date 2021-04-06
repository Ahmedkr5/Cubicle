import './App.css';
import ChatApp from './views/ChatApp';
import Login from './components/Auth/Login/SignIn';
import VideoCall from './views/VideoCall'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Profile from './Profile';


function App() {
  return <div className='App'>
   
     <Router>
     <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/AppChat">
            <ChatApp/>
          </Route>
          <Route
path="/video"
render={(props) => <VideoCall {...props} />}
></Route>
  </Router>
  </div>;
}

export default App;
