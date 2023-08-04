import logo from "../../assets/images/MoviesLibLogo.png";
import avatar from "../../assets/images/Ellipse.svg";
import chevronDown from "../../assets/images/ChevronDown.svg";
import "./header.css";
import { useState } from "react";
import NavbarDropDown from "../navbarDropDown/NavbarDropDown";

function Header() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
      };
    return (  
        <div className="flex-header">
            <img src={logo} alt = "logo" className="logo"/>
            <div className="header-avatar">
                <img src={avatar} alt = "avatar" />
                <img src={chevronDown} alt = "chevrondown" className="chevronDown"  onClick={toggleDropdown}/>
            </div>
            {isDropdownVisible && 
                <NavbarDropDown /> }
        </div>
    );
}

export default Header;