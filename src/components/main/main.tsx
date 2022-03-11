import react from "react"
import "./main.css"

import Sidebar from "../sidebar/sidebar"
import Block from "../block/block"

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import ScienceIcon from '@mui/icons-material/Science';


function Main() {

    let num = 12

    let date = "4/26/2022"
    return (
        <div className="main">


            <Sidebar />

            <div className="wrapper">

                <div className="main-header">
{/* 
                    <div className="test"></div> */}

                    <div className="main-blocks">
                        <Block block_text="All Active Orders" block_icon_color="block-icon-wrapper-orange" block_number={3} block_stats_text={`Next order arriving on  ${date}`} block_stats={<ArrowUpwardIcon />} block_icon={<LocalShippingIcon sx={{ fontSize: 28 }} />} />
                        <Block block_text="Your Pending Orders" block_icon_color="block-icon-wrapper-blue" block_number={2} block_stats_text={`Awaiting 2 new items`} block_stats={<ArrowUpwardIcon />} block_icon={<PersonIcon sx={{ fontSize: 30 }} />} />
                        <Block block_text="Expiring Supplies" block_icon_color="block-icon-wrapper-yellow" block_number={6} block_stats_text={`6 items to expire soon`} block_stats={<ArrowUpwardIcon />} block_icon={<ScienceIcon sx={{ fontSize: 30 }} />} />
                        <Block block_text="Items In Stock" block_icon_color="block-icon-wrapper-red" block_number={345} block_stats_text={`${num} new items recieved this month`} block_stats={<ArrowUpwardIcon />} block_icon={<InventoryIcon />} />


                    </div>
                </div>

                {/* <div className="test2"></div> */}

            </div>


        </div>
    )
}

export default Main;