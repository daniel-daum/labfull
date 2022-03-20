
import "./inventory.css"

import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import ProfileEditor from "../../components/profile_edit/profile_editor";

import Avatar from '@mui/material/Avatar';
import { deepOrange } from "@mui/material/colors"


function Inventory() {
    return (
        <div className="inventory">

            <Sidebar />

            <div className="inventory-wrapper">

                <div className="inventory-header">
                    
                    <Navbar pageTitle="PROFILE" userName="Obi-Wan Kenobi" userAvatar={<Avatar sx={{width:35, height:35, bgcolor:deepOrange[500]}} />}/>
                  
                </div>

                
                

              

            </div>
            


        </div>
    )
}

export default Inventory;