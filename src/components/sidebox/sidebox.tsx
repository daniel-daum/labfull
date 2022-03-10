import react from "react"
import "./sidebox.css"

type sideboxProps = {
    img?:string;
    text?:string;
}

function Sidebox(props:sideboxProps){
    return(
        <div className="sidebox">

            <div className="sidebox-text">{props.text}</div>

        </div>
    )
}

export default Sidebox;