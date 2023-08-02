import Card from "../../UI/card/Card";
import Carduser from "../../UI/cardUser/CardUser";
import MyCart from "../../UI/mycart/MyCart";
import SideBar from "../../UI/sideBar/SideBar";
import Header from "../../UI/header/Header";
import search from "../../assets/images/Search.svg";
import "./moviesList.css";
import Movies from "../../UI/movies/Movies";
import chevronRigth from "../../assets/images/Vector.svg";
function MoviesList () {
    return (  
       <>
         <Header />
         <div className="container-menu">
            <div className="container-flex-column">
                <Carduser />
                <MyCart />
                <SideBar />

               <p style={{marginBlock:"50px", textAlign: "center", color: 'rgba(112,111,111,0.80)',fontSize: 12,fontFamily: 'Ubuntu',
fontWeight: '400'}}>© 2023 MoviesLib, SA.</p>
            </div>
            <div className="container-film">
                <div style={{display: "flex", justifyContent:"space-between"}} >
                    
                        <p style={{color: '#1D2749',fontFamily: 'Ubuntu',fontWeight: '700', fontSize: "24px"}}> Discover <br />
                            <span style={{color: 'rgba(29,39,73,0.80)', fontSize: "14px",  fontFamily: 'Ubuntu', fontWeight: '300'}}>What do you want to watch today ? Explore I library to find out.</span>
                        </p>
                    
                        <div style={{display: "flex"}}>
                            <input type="search" placeholder="search" className="input-search"/>
                            <img   src={search} alt="search" className="search"/>
                        </div>
                       

                </div>
                <div style={{display: "flex", marginTop: "10px"}}>
                    <Card width= "150px" padding="0px 12px" height= "50px" margin="25px 5px">
                            <div style={{display: "flex", justifyContent: "space-between"}}>
                                <p style={{color: '#656976',fontSize: 14,fontFamily: 'Ubuntu',fontWeight: '300',  paddingBlock:"7px"}}>All genres</p>
                                <img src={chevronRigth} alt="icone chevron right"/>
                            </div>
                    </Card>
                    <Card width= "150px" padding="0px 12px" height= "50px" margin="25px 5px">
                            <div style={{display: "flex"}}>
                                <span className="div-border"></span>
                                <p style={{color: '#656976',fontSize: 14,fontFamily: 'Ubuntu',fontWeight: '300',  paddingBlock:"4px",marginInline:"5px"}}>Most Popular</p>
                                
                            </div>
                    </Card>
                    <Card width= "150px" padding="0px 12px" height= "50px" margin="25px 5px">
                            <div style={{display: "flex"}}>
                            <span className="div-border"></span>
                                <p style={{color: '#656976',fontSize: 14,fontFamily: 'Ubuntu',fontWeight: '300',  paddingBlock:"4px", marginInline:"5px"}}>Most Recent</p>
                                
                            </div>
                    </Card>
                </div>
                <div style={{display:"flex", marginLeft:"-10px", flexWrap:"wrap"}}>
                    <Movies />
                    <Movies />
                    <Movies />
                    <Movies />
                    <Movies />
                    <Movies />
                    <Movies />
                    <Movies />
                    <Movies />
                   
                </div>
            </div>

         </div>
         


       </>
            
    
    );
}

export default MoviesList ;