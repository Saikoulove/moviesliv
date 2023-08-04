import person from "../../assets/images/Person.svg";
import chevronRigth from "../../assets/images/Vector.svg";
import logout from "../../assets/images/Logout.png";
import "./navbarDropDown.css";
import Card from "../card/Card";
import { useNavigate } from "react-router-dom";
function NavbarDropDown() {

const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
    return (  
        <Card padding = "16px" width= "11.43rem" margin = "20px">
            <div className="navbar-items">
                <img src={person} alt="icone personne" className="icone-person"/>
                <p className="navbar-items-text">My profile</p>
                <img src={chevronRigth} alt="icone chevron right"/>
            </div>
            <div className="navbar-items" onClick={handleLogout}>
            <img src={logout} alt="icone deconnexion"/>
                <p className="navbar-items-text" style={{marginRight: "70px"}}>Logout</p>
                <img src={chevronRigth} alt="icone chevron right"/>
            </div>
        </Card>
    );
}

export default NavbarDropDown;