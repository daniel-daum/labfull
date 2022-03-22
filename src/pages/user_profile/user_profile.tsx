
import "./user_profile.css"

import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";


import Avatar from '@mui/material/Avatar';
import { deepOrange } from "@mui/material/colors"


function User_Profile() {
    return (
        <div className="user-profile">

            <Sidebar />

            <div className="user-profile-wrapper">

                <div className="user-profile-header">
                    
                    <Navbar pageTitle="PROFILE" userName="Obi-Wan Kenobi" userAvatar={<Avatar sx={{width:35, height:35, bgcolor:deepOrange[500]}} />}/>
              
                </div>

                
                

              

            </div>
            


        </div>
    )
}

export default User_Profile;