import React from 'react';
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main';
import Navbar from './components/navbar/navbar';



function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}> 
        <Routes>
          <Route path="/" element={<Main/>} />
          
          
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;