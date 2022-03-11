import react from "react"
import "./sidebox.css"
import React from "react";

type sideboxProps = {
    icon?: React.ReactNode;
    text?: string;
    icon_color?:string;
}

function Sidebox(props: sideboxProps) {
    return (
        <div className="sidebox">

            <div className="sidebox-content">
                <div className={props.icon_color}>{props.icon} </div>
                <div className="sidebox-text">{props.text}</div>
            </div>

        </div>
    )
}

export default Sidebox;