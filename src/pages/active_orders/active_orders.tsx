
import "./active_orders.css"

import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";

import Avatar from '@mui/material/Avatar';
import { deepOrange } from "@mui/material/colors"


function Active_Orders() {
    return (
        <div className="active-orders">

            <Sidebar />

            <div className="active-orders-wrapper">

                <div className="active-orders-header">
                    
                    <Navbar pageTitle="ACTIVE ORDERS" userName="Obi-Wan Kenobi" userAvatar={<Avatar sx={{width:35, height:35, bgcolor:deepOrange[500]}} />}/>
                   
                </div>


                
            </div>

            


        </div>
    )
}

export default Active_Orders;