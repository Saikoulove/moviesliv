import "./movies.css";
import film from "../../assets/images/image1.png";
import like from "../../assets/images/like.svg";
import likeRouge from "../../assets/images/LikeRouge.svg";
import likeSurvol from "../../assets/images/Likered.svg";
import icone_vote from "../../assets/images/StarFill.svg"
import play from "../../assets/images/Play.svg"
import playSurvol from "../../assets/images/PlaySurvol.svg"
import cartplus from "../../assets/images/CartPlus.svg"
import { useState } from "react";
import Modal from "../modal/Modal";

const API_IMG = "https://image.tmdb.org/t/p/w500"
function Movies({title, poster_path, vote_average, overview}) {
    const [showModal, setShowModal] = useState(false);
    const [liked, setLiked] = useState(false);
    const [likedImageSrc, setLikedImageSrc] = useState(like);
    const [hovered, setHovered] = useState(false);

    const openModal = () => {
        setShowModal(true);
        
      };
    
      const closeModal = () => {
        setShowModal(false);
      };

      const handleLikeClick = () => {
        setLiked(!liked);
      };

      const handleMouseEnter = () => {
        setHovered(true);
      };
    
      const handleMouseLeave = () => {
        setHovered(false);
      };
            
      
    return ( 
        <div className="container">
            <img
                src={API_IMG+poster_path}
                alt="film"
                className="image1" 
             />
            <img
                src={liked ? likeRouge : (hovered ? likeSurvol: like)}
                alt="liker"
                className= "image2"
                onClick={handleLikeClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            <div className="flex-column">
                <div className="flex-vote">
                    <div className="flex-vote-row">
                        <img src={icone_vote} alt="vote des visiteurs"/>
                        <p className = "flex-vote-text" style={{marginInline: "15px"}}>{vote_average}</p>
                    </div>
                    
                    <p style={{color: '#EA580C', fontSize: 16, fontFamily: 'Ubuntu',fontWeight: '500'}}>$4.5</p>
                </div>
                <p className="flex-vote-text">{title}</p>
                <div className="flex-play">
                    <div className="flex-play-row" onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                        <img src={hovered ? playSurvol : play} alt="lecture du film"
                             onClick={openModal}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}

                        />
                        <p style={{marginInline: "15px"}} className="flex-play-text">Trailer</p>
                    </div>
                    <img src={cartplus} alt="commander" className="image-commander"/>
                </div>
            </div>
            {showModal && <Modal onClose={closeModal} vote_average = {vote_average} description = {overview}/> }
        </div>
     );
}

export default Movies;