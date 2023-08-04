import Card from "../../UI/card/Card";
import Carduser from "../../UI/cardUser/CardUser";
import MyCart from "../../UI/mycart/MyCart";
import SideBar from "../../UI/sideBar/SideBar";
import Header from "../../UI/header/Header";
import search from "../../assets/images/Search.svg";
import "./moviesList.css";
import Movies from "../../UI/movies/Movies";
import chevronRigth from "../../assets/images/Vector.svg";
import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = "b1682f251791dd8c2ca42f53ff7f4d86";
const API_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en`

function MoviesList () {

    const [movies, setMovies] = useState([]);
    const [searchMovie, setSearchMovie] = useState('');
    const [moviesToShow, setMoviesToShow] = useState(6);


    const getMovieList = () => {
        axios.get(API_MOVIES)
        .then(res => {
            // console.log(res.data.results)
             setMovies(res.data.results.slice(0, moviesToShow));
        })
        .catch(error => {
          console.error("Erreur lors de l'appel API :", error);
        });
    }
   

    const handleSearch = e =>{
        setSearchMovie(e.target.value);
    }

    const loadMoreMovies = () => {
        setMoviesToShow(prev => prev + 3);
        console.log("merci ");
      };
    const searchMovies = e => {
        e.preventDefault();
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b1682f251791dd8c2ca42f53ff7f4d86&query=${searchMovie}`)
        .then(res => {
            console.log(res.data.results)
            setMovies(res.data.results);
            
        })
        .catch(error => {
          console.error('Erreur lors de l\'appel API :', error);
        });
    }

    useEffect(() => {
        getMovieList();
    }, [moviesToShow]);

   

    const user = JSON.parse(localStorage.getItem("user"));
   
    return ( 

       <>
         <Header />
         <div className="container-menu">
            <div className="container-flex-column">
                <Carduser username={user.username} email={user?.email}/>
                <MyCart />
                <SideBar />

               <p style={{marginBlock:"50px", textAlign: "center", color: 'rgba(112,111,111,0.80)',fontSize: 12,fontFamily: 'Ubuntu',fontWeight: '400'}}>© 2023 MoviesLib, SA.</p>
            </div>
            <div className="container-film">
                <div style={{display: "flex", justifyContent:"space-between"}} >
                    
                        <p style={{color: '#1D2749',fontWeight: '700', fontSize: "24px"}}> Discover <br />
                            <span style={{color: 'rgba(29,39,73,0.80)', fontSize: "14px",  fontFamily: 'Ubuntu', fontWeight: '300'}}>What do you want to watch today ? Explore I library to find out.</span>
                        </p>
                    
                        <div style={{display: "flex", marginTop:"20px" }} className="input-search">
                            <input type="search" placeholder="search" value={searchMovie} onChange={handleSearch} style={{border:"none", outline: "none"}} />
                            <img   src={search} alt="search" className="search" onClick={searchMovies}/>
                        </div>
                       

                </div>
                <div style={{display: "flex", marginTop: "10px"}}>
                    <Card width= "150px" padding="0px 12px" height= "50px" margin="25px 5px">
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <p style={{color: '#656976',fontSize: 14,fontWeight: '300',  paddingBlock:"7px"}}>All genres</p>
                                <img src={chevronRigth} alt="icone chevron right"/>
                            </div>
                    </Card>
                    <Card width= "150px" padding="0px 12px" height= "50px" margin="25px 5px">
                            <div style={{display: "flex"}}>
                                <span className="div-border"></span>
                                <p style={{color: '#656976',fontSize: 14, fontWeight: '300',  paddingBlock:"4px",marginInline:"5px"}}>Most Popular</p>
                                
                            </div>
                    </Card>
                    <Card width= "150px" padding="0px 12px" height= "50px" margin="25px 5px">
                            <div style={{display: "flex"}}>
                            <span className="div-border"></span>
                                <p style={{color: '#656976',fontSize: 14,fontWeight: '300',  paddingBlock:"4px", marginInline:"5px"}}>Most Recent</p>
                                
                            </div>
                    </Card>
                </div>
                <div style={{display:"flex", marginLeft:"-10px", flexWrap:"wrap"}}>
                    {movies.map((movie) => 
                        <Movies key={movie.id} {...movie} />)}
                </div>
                <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
                    <button onClick={loadMoreMovies} style={{background: 'rgba(29, 39, 73, 0.15)', boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)', padding:"20px", borderRadius: "4px", border:"none"}}>See More</button>
                </div>
            </div>

         </div>
         
       </>
            
    
    );
}

export default MoviesList ;