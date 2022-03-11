import "./sidebar.css"

import Sidebox from '../sidebox/sidebox';

import DataUsageIcon from '@mui/icons-material/DataUsage';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BugReportIcon from '@mui/icons-material/BugReport';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function Sidebar() {
    return (
        <div className='sidebar'>

            <div className="sidebar-wrapper">

                <h1 className='sidebar-logo'> <a href="/">LABFULL</a></h1>


                <div className='sidebar-mid'>
                    <Sidebox text='Dashboard' icon_color="sidebox-icon-blue" icon={<DataUsageIcon sx={{ fontSize: 25 }} />} />
                    <Sidebox text='Add Order' icon_color="sidebox-icon-green" icon={<AddIcon sx={{ fontSize: 26 }} />} />
                    <Sidebox text='Active Orders' icon_color="sidebox-icon-orange" icon={<LocalShippingIcon sx={{ fontSize: 26 }} />} />
                    <Sidebox text='Inventory' icon_color="sidebox-icon-red" icon={<ViewListIcon />} />
                    <Sidebox text='User Profile' icon_color="sidebox-icon-teal" icon={<PersonIcon />} />

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