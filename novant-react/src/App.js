import './App.css';
import ChatBox from './components/rightSideBar/ChatBox';
import Login from './components/Auth/Login/SignIn';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Profile from './Profile';
import Coins from './Coins';


function App() {
  return <div className='App'>
     <Router>
     <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/coins">
            <Coins/>
          </Route>
  </Router>
  </div>;
}

export default App;
