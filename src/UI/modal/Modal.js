import { useState } from "react";
import fermer from "../../assets/images/X.svg";
import video from "../../assets/images/PlayBtnFill.svg";
import vote from "../../assets/images/StarFill.svg";
import cartplus from "../../assets/images/CartPlusWhite.svg";
import "./modal.css"
function Modal({onClose}) {
    const [modalOpen, setModalOpen] = useState (false);
    const openModal = () =>{
        setModalOpen(true);
    }

    const closeModal = () =>{
        setModalOpen(false);
        onClose();
    }
    return (  
        <>
            <div className="modal">
                <div className="modal-content">
                    <img src={fermer} alt="fermer la modale"  onClick={closeModal} style={{cursor:"pointer"}}/>   
                    <h1 style={{color: '#1D2749',fontSize: 22,fontFamily: 'Ubuntu',
                    fontWeight: '500', marginInline: "10px"}}>Oppenheimer</h1>        
              </div>
              <div className="modal-content-video">
                            <img src={video} alt="video"/>
             </div>  
             <p className="description"> ldsldskfjdkdfsljldfjlfdldslsfkk skjdfsbkdfdfbksddsbdds</p>
             <div className="flex-vote">
                    <div className="flex-vote-row">
                        <img src={vote} alt="vote des visiteurs"/>
                        <p className = "flex-vote-text" style={{marginInline: "15px"}}>4.2</p>
                    </div>
                    
                    <p style={{color: '#EA580C', fontSize: 16, fontFamily: 'Ubuntu',fontWeight: '500'}}>$4.5</p>
            </div>
            <div style={{position:"absolute", bottom:"5%", right: "5%"}}>
                <button className="button-ajout-panier" >
                    <img src={cartplus} alt="commander" style={{ marginBlock: "-3px"}}/>
                     <span style={{marginInline: "5px", marginTop:"5px"}}>Ajouter au panier</span>
                </button>
            </div>
            </div>
            {modalOpen && (
                <div className="overlay" onClick={closeModal}></div>
      )}
    </>
    );
}

export default Modal;