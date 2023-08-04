import { useState } from "react";
import logo from "../../assets/images/MoviesLibLogo.png"
import "./login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Login () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
    
        axios
          .get(`http://localhost:8000/users?email=${email}&password=${password}`)
          .then((response) => {
            //console.log(response.data)
            if (response.data.length === 1) {
              // Connexion réussie
              const user = response.data[0];
              localStorage.setItem("user", JSON.stringify(user));
              navigate("/movies");
            } else {
              setErrorMessage("Email ou mot de passe incorrect");
            }
          })
          .catch((error) => {
            console.error("Erreur login:", error);
            setErrorMessage("Une erreur s'est produite lors de la connexion. Veuillez réessayer plus tard.");
          });
      };

    return (  
       
     <div className="login-page">
            <div className="flex-center">
                <img src={logo} alt="logo" classNameName="logo" />
                <h1 className="text-bienvenue">Welcom back</h1>
            </div>
            <div className="form">
                <form onSubmit={handleLogin}>
                    <div className="form-column">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="email" placeholder="Enter your email" 
                               className="form-input"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)} />
                        

                    </div> <br/>
                    <div className="form-column">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" placeholder="Enter password"  
                               className="form-input"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <p className="text-forgot">
                        <Link to="#"className="text-forgot">Forgot my password</Link>
                    </p>
                    
                    <button className="form-button"><span className="form-button-text">Login Now</span> </button>
                </form>
            </div>
        
    </div>
       
    );
}

export default Login;
