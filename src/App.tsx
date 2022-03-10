import React from 'react';
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main';



function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}> 
        <Routes>
          <Route path="/" element={<Sidebar/>} />
          
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;