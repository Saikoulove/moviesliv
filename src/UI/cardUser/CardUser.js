import "./cardUser.css";
import avatar from "../../assets/images/Ellipse.svg";
import chevronRigth from "../../assets/images/Vector.svg";
import Card from "../card/Card";

function Carduser() {
    return (  
        <Card  padding = "16px" width = "14.87rem" margin = "20px">
            <div className="card-user-group">
                <img src={avatar} alt="icone personne" className="icone-person"/>
                <div style={{marginRight: "50px"}}>
                     <p className="card-user-text">Saikou Diallo</p>
                     <p className="card-user-email">saikoudiallo01gmail.com</p>
                </div>
                
                <img src={chevronRigth} alt="icone chevron right"/>
            </div>
        </Card>
    );

}

export default Carduser;