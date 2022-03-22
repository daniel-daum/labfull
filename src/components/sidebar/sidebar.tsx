import "./sidebar.css"

import Sidebox from '../sidebox/sidebox';

import DataUsageIcon from '@mui/icons-material/DataUsage';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BugReportIcon from '@mui/icons-material/BugReport';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from "react-router-dom";



function Sidebar() {
    return (


        <div className='sidebar'>


            <div className="sidebar-wrapper">

                <h1 className='sidebar-logo'> <a href="/">LABFULL</a></h1>


                <div className='sidebar-mid'>
                    <Link to={"/dashboard"}><Sidebox text='Dashboard' icon_color="sidebox-icon-blue" icon={<DataUsageIcon sx={{ fontSize: 25 }} />} /></Link>
                    <Link to={"/add_order"}>    <Sidebox text='Add Order' icon_color="sidebox-icon-green" icon={<AddIcon sx={{ fontSize: 26 }} />} /></Link>
                    <Link to={"/active_orders"}>  <Sidebox text='Active Orders' icon_color="sidebox-icon-orange" icon={<LocalShippingIcon sx={{ fontSize: 26 }} />} /></Link>
                    <Link to={"/inventory"}>  <Sidebox text='Inventory' icon_color="sidebox-icon-red" icon={<ViewListIcon />} /></Link>
                    <Link to={"/user_profile"}> <Sidebox text='User Profile' icon_color="sidebox-icon-teal" icon={<PersonIcon />} /> </Link>

                </div>

                <div className="sidebar-bottom">
                    <div className="sidebar-bottom-title">DOCUMENTATION</div>
                    <Sidebox text='Getting Started' icon_color="sidebox-icon-grey" icon={<RocketLaunchIcon sx={{ fontSize: 22 }} />} />
                    <Sidebox text='Report a Bug' icon_color="sidebox-icon-grey" icon={<BugReportIcon sx={{ fontSize: 22 }} />} />



                </div>
            </div>

            <div className="sidebar-end"><a href="https://www.github.com/daniel-daum/labfull">SOURCE</a> </div>


        </div>
    )

}

export default Sidebar;