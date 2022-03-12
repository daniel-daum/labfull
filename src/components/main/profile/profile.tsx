
import "./profile.css"

import Sidebar from "../../sidebar/sidebar";
import Navbar from "../../navbar/navbar";
import ProfileEditor from "../../profile_edit/profile_editor";

import Avatar from '@mui/material/Avatar';
import { deepOrange } from "@mui/material/colors"


function Profile() {
    return (
        <div className="profile">

            <Sidebar />

            <div className="profile-wrapper">

                <div className="profile-header">
                    
                    <Navbar pageTitle="PROFILE" userName="Obi-Wan Kenobi" userAvatar={<Avatar sx={{width:35, height:35, bgcolor:deepOrange[500]}} />}/>
                    <div className="main-blocks">
                        
                    </div> 
                </div>

                
                

              

            </div>
            


        </div>
    )
}

export default Profile;