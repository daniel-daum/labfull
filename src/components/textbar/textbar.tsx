
import "./textbar.css"

type textbarProps = {
    label:string,
    placeholder?: string,
    type?:string,
}

export default function Textbar(props:textbarProps){
    
    return(
        <div className="textbar">
            <label htmlFor="textbar-input">{props.label}</label>
            <input className="textbar-input" id="textbar-input" type={props.type} placeholder={props.placeholder} />
        </div>
        )
}