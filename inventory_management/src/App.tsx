import React from 'react';
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from './components/sidebar/sidebar';


function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}> 
        <Routes>
          <Route path="/" element={<Sidebar />} />
          
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;