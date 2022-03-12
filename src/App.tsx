import React from 'react';
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/home/main';
import Navbar from './components/navbar/navbar';
import Profile from './components/main/profile/profile';



function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}> 
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/profile" element={<Profile/>} />
          
          
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;