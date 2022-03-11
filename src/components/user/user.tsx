import React from "react"
import "./user.css"

type userProps = {
    userName?:string,
    userAvatar?:React.ReactNode
}

function User(props:userProps){
    return(
        <div className="user">

            <div className="user-avatar">{props.userAvatar}</div>
            <div className="user-name"> <a href="/">{props.userName}</a></div>

        </div>
    )
}

export default User;