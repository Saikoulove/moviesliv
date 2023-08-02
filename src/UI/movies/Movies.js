import "./movies.css";
import film from "../../assets/images/image1.png";
import like from "../../assets/images/like.svg";
import vote from "../../assets/images/StarFill.svg"
import play from "../../assets/images/Play.svg"
import cartplus from "../../assets/images/CartPlus.svg"
import { useState } from "react";
import Modal from "../modal/Modal";
function Movies() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
        
      };
    
      const closeModal = () => {
        setShowModal(false);
      };

    return ( 
        <div className="container">
            <img
            src={film}
            alt="film"
            className="image1" 
             />
            <img
                src={like}
                alt="liker"
                className="image2"
            />
            <div className="flex-column">
                <div className="flex-vote">
                    <div className="flex-vote-row">
                        <img src={vote} alt="vote des visiteurs"/>
                        <p className = "flex-vote-text" style={{marginInline: "15px"}}>4.2</p>
                    </div>
                    
                    <p style={{color: '#EA580C', fontSize: 16, fontFamily: 'Ubuntu',fontWeight: '500'}}>$4.5</p>
                </div>
                <p className="flex-vote-text">Secret invasion</p>
                <div className="flex-play">
                    <div className="flex-play-row">
                        <img src={play} alt="lecture du film" onClick={openModal} />
                        <p style={{marginInline: "15px"}} className="flex-play-text">Trailer</p>
                    </div>
                    <img src={cartplus} alt="commander" className="image-commander"/>
                </div>
            </div>
            {showModal && <Modal onClose={closeModal} />}
        </div>
     );
}

export default Movies;