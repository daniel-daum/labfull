
import "./add_order.css"

import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import New_Order from "../../components/new_order/new_order";


import Avatar from '@mui/material/Avatar';
import { deepOrange } from "@mui/material/colors"




function Add_Order() {
    return (
        <div className="add-order">

            <Sidebar />

            <div className="add-order-wrapper">

                <div className="add-order-header">

                    <Navbar pageTitle="ADD ORDER" userName="Obi-Wan Kenobi" userAvatar={<Avatar sx={{ width: 35, height: 35, bgcolor: deepOrange[500] }} />} />

                </div>

                <div className="add-order-form">
                    <New_Order />

                </div>










            </div>



        </div>
    )
}

export default Add_Order;