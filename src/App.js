
import Login from './pages/login/Login';
import MoviesList from './pages/moviesList/MoviesList';
import Carduser from './UI/cardUser/CardUser';
import Header from './UI/header/Header';
import Movies from './UI/movies/Movies';
import MyCart from './UI/mycart/MyCart';
import NavbarDropDown from './UI/navbarDropDown/NavbarDropDown';
import SideBar from './UI/sideBar/SideBar';

function App() {
  return (
    <div className="App">
        {/* <Login /> */}
        {/* <NavbarDropDown />
        <Carduser />
       <MyCart /> 
        <SideBar /> 
         <Movies />
        <MyCart />  */}
        <MoviesList />
    </div>
  );
}

export default App;
