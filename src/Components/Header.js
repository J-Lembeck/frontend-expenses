import "./header.css"
import logo from "../assets/expenses_logo.png";

const Header = () => {

    return (
        <div className="header">
            <div className="logo">
                <img alt="" src={logo} height={40} width={65} />
            </div>
        </div>
    )
}

export default Header;