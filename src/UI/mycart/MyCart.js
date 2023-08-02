import Card from "../card/Card";
import "./myCart.css";
import chevronRigth from "../../assets/images/Vector.svg";
import panier from "../../assets/images/Panier.svg";

function MyCart() {
    return (  
        <Card padding="10px 16px" width= "16.89rem" margin= "10px 0px" height="46px">
            <div className="cart-flex">
                <img src={panier} alt="icone panier"/>
                <p style={{marginRight:"7.25rem"}} className="cart-text">My Cart</p>
                <p className="cart-value">2</p>
                <img src={chevronRigth} alt="icone chevron right"/>
            </div>
        </Card>
    );
}

export default MyCart;