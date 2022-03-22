
import "./dashboard.css"

import Sidebar from "../../components/sidebar/sidebar"
import Block from "../../components/block/block"
import Navbar from "../../components/navbar/navbar"

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import ScienceIcon from '@mui/icons-material/Science';
import Avatar from '@mui/material/Avatar';

import { deepOrange } from "@mui/material/colors"


function Dashboard() {

    const num = 12

    const date = "4/26/2022"
    return (
        <div className="main">


            <Sidebar />

            <div className="wrapper">

                <div className="main-header">
                  
                    <Navbar pageTitle="DASHBOARD" userName="Obi-Wan Kenobi" userAvatar={<Avatar sx={{width:35, height:35, bgcolor:deepOrange[500]}} />}/>
                    <div className="main-blocks">
                        <Block block_text="All Active Orders" block_icon_color="block-icon-wrapper-orange" block_number={3} block_stats_text={`Next order arriving on  ${date}`} block_stats={<ArrowUpwardIcon />} block_icon={<LocalShippingIcon sx={{ fontSize: 28 }} />} />
                        <Block block_text="Your Pending Orders" block_icon_color="block-icon-wrapper-blue" block_number={2} block_stats_text={`Awaiting 2 new items`} block_stats={<ArrowUpwardIcon />} block_icon={<PersonIcon sx={{ fontSize: 30 }} />} />
                        <Block block_text="Expiring Supplies" block_icon_color="block-icon-wrapper-yellow" block_number={6} block_stats_text={`6 items to expire soon`} block_stats={<ArrowUpwardIcon />} block_icon={<ScienceIcon sx={{ fontSize: 30 }} />} />
                        <Block block_text="Items In Stock" block_icon_color="block-icon-wrapper-red" block_number={345} block_stats_text={`${num} new items recieved this month`} block_stats={<ArrowUpwardIcon />} block_icon={<InventoryIcon />} />
                    </div> 
                </div>
                
                

                {/* PUT BOTTOM MAIN HALF HERE */}
                

            </div>
            


        </div>
    )
}

export default Dashboard;