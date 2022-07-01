
import "./button.css"

type buttonProps = {
    buttonTitle: string
}

export default function Button(props: buttonProps) {

    return (
        <div className="button-wrapper">
            <div className="button-text">{props.buttonTitle}</div>
        </div>
    )

}