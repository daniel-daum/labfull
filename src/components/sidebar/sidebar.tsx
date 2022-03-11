import react from 'react'
import "./sidebar.css"
import Sidebox from '../sidebox/sidebox';
import DataUsageIcon from '@mui/icons-material/DataUsage';

function Sidebar() {
    return (
        <div className='sidebar'>

            <h1 className='sidebar-logo'> <a href="/">LABFULL</a></h1>


            <div className='sidebar-wrapper'>
                <Sidebox text='Dashboard' icon={<DataUsageIcon />} />
        
            </div>






        </div>
    )

}

export default Sidebar;