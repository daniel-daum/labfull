import { HashRouter as Router, Routes, Route} from "react-router-dom";


import Dashboard from "./pages/dashboard/dashboard";
import Active_Orders from "./pages/active_orders/active_orders";
import Add_Order from "./pages/add_order/add_order"
import Inventory from "./pages/inventory/inventory";
import User_Profile from "./pages/user_profile/user_profile";
import Splash_Page from "./pages/splash_page/splash_page";

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}> 
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/active_orders" element={<Active_Orders/>} />
          <Route path="/add_order" element={<Add_Order/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/user_profile" element={<User_Profile/>} />
          <Route path="/" element={<Splash_Page/>} />
          
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;