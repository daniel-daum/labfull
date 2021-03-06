import "./navbar.css"

import User from "../user/user"
import Search from "../search/search"

type navbarProps = {
    userName?: string,
    userAvatar?: React.ReactNode
    pageTitle?:string,
}

function Navbar(props: navbarProps) {
    return (
        <div className="navbar">

            <div className="navbar-left">
                <div className="navbar-title">{props.pageTitle}</div>

            </div>

            <div className="navbar-right">
                <div className="navbar-search"><Search /></div>
                <div className="navbar-user"><User userName={props.userName} userAvatar={props.userAvatar} /></div>
            </div>





        </div>
    )
}

export default Navbar;