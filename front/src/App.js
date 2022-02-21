import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Navbar from './Components/Navbar';
import SignIn from "./Components/SignIn";
import SignUp from "./Components/Register";
import Profile from './Components/Profile/Profile'
import EditProfile from "./Components/Profile/EditProfile/EditProfile";
import Matches from './Components/Matches/Matches'

import './App.css';

function App() {
  return (
    <Router>
      <div>
      <Navbar/>
        <Routes>
          <Route path='/signin'element={<SignIn/>} />
          <Route path='/signup'element={<SignUp/>} />  
          <Route path="/view-profile" element={<Profile/>}/>
          <Route path="/edit-profile" element={<EditProfile/>}/>
          <Route path ='/my-matches' element={<Matches/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;