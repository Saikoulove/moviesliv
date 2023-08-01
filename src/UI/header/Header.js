import logo from "../../assets/images/MoviesLibLogo.png";
import avatar from "../../assets/images/Ellipse.svg";
import chevronDown from "../../assets/images/ChevronDown.svg";
import "./header.css";

function Header() {
    return (  
        <div className="flex-header">
            <img src={logo} alt = "logo" className="logo"/>
            <div className="header-avatar">
                <img src={avatar} alt = "avatar" />
                <img src={chevronDown} alt = "chevrondown" className="chevronDown" />
            </div>
        </div>
    );
}

export default Header;