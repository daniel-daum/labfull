
import "./inventory.css"

import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";

import Avatar from '@mui/material/Avatar';
import { deepOrange } from "@mui/material/colors"
import Table from "../../components/table/Table";




function Inventory() {

    return (
        <div className="inventory">

            <Sidebar />

            <div className="inventory-wrapper">

                <div className="inventory-header">
                    
                    <Navbar pageTitle="INVENTORY" userName="Obi-Wan Kenobi" userAvatar={<Avatar sx={{width:35, height:35, bgcolor:deepOrange[500]}} />}/>
                  
                </div>

                <div className="inventory-table">


                    <Table />
                    
                </div>

                
                

              

            </div>
            


        </div>
    )
}

export default Inventory;