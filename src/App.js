
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/login/Login';
import MoviesList from './pages/moviesList/MoviesList';
import { useEffect } from 'react';



function App() {
 
  return (
    
    <div className="App">
        <BrowserRouter > 
            <Routes>
               <Route path="/" element={<Navigate to="/login" />} /> 
               <Route path='/login' element = {<Login/>}></Route>
               <Route exact path='/movies' element={<MoviesList />}></Route>
            </Routes>

        </BrowserRouter>
 
    </div>
  );
}

export default App;
