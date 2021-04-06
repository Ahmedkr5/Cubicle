import './App.css';
import ChatBox from './components/rightSideBar/ChatBox';
import Login from './components/Auth/Login/SignIn';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Profile from './Profile';
import Groupe from './Groupe'

function App() {
  return <div className='App' style={{backgroundColor : '#F0F2F5'}}>
     <Router>
     <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/Groupe">
            <Groupe/>
          </Route>
  </Router>
  </div>;
}

export default App;
