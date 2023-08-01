import logo from "../../assets/images/MoviesLibLogo.png"
import "./login.css";
function Login () {

    return (  
       
     <div className="login-page">
            <div className="flex-center">
                <img src={logo} alt="logo" classNameName="logo" />
                <h1 className="text-bienvenue">Welcom back</h1>
            </div>
            <div className="form">
                <form action="">
                    <div className="form-column">
                        <label for="email" className="form-label">E-mail</label>
                        <input type="text" placeholder="Enter your email" className="form-input" />
                        

                    </div> <br/>
                    <div className="form-column">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" placeholder="Enter password"  className="form-input"/>
                    </div>
                    <p className="text-forgot">I forgot my password</p>
                    
                    <button className="form-button"><span className="form-button-text">Login Now</span> </button>
                </form>
            </div>
        
    </div>
       
    );
}

export default Login;
