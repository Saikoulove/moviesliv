
import Card from "../card/Card";
import home from "../../assets/images/HouseDoor.svg";
import chevronRigth from "../../assets/images/Vector.svg";
import chevron from "../../assets/images/VectorHome.svg";
import movies from "../../assets/images/Film.svg";
import like from "../../assets/images/Heart.svg";
import "./sideBar.css";
function SideBar () {
    return (  
        <Card padding= "16px" width= "16.89rem" margin= "20px">
            <div>
                <div className="sidebar-items sidebar-items-home" style={{background: "#1B274C"}} >
                    <img src={home} alt="icone home" />
                    <p className="sidebar-items-text" style={{marginRight: "150px", color: "white"}}>Discover </p>
                    <img src={chevron} alt="icone chevron right"/>
                </div>
                <div className="sidebar-items border-top">
                <img src={movies} alt="icone flms"/>
                    <p className="sidebar-items-text" style={{marginRight: "140px"}}>My Movies</p>
                    <img src={chevronRigth} alt="icone chevron right"/>
                </div>
                <div className="sidebar-items border-top">
                <img src={like} alt="icone aimer"/>
                    <p className="sidebar-items-text" style={{marginRight: "140px"}}>My Wishlist</p>
                    <img src={chevronRigth} alt="icone chevron right"/>
                </div>
            </div>
            
        </Card>

       
        
    );
}

export default SideBar ;