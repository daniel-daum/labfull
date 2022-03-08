import react from 'react'
import "./sidebar.css"
import Sidebox from '../sidebox/sidebox';

function Sidebar() {
    return (
        <div className='sidebar'>

            <h1 className='sidebar-logo'>LABFULL</h1>

            <Sidebox text='Dashboard' />
            <Sidebox />
            <Sidebox />

            
            

        </div>
    )

}

export default Sidebar;