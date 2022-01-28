import React from "react";
import './App.css';
import profile from "./image/a.png";
// import email from "./image/email.jpg";
// import pass from "./image/pass.png"
// import addvertise from "./image/advertise.jpeg"

function Login(){
    return(
    <>
        <div className="main" >
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />

              </div>


            </div>
            <form>
            <div>
              <h1>Login</h1>
              <div>
                {/* <img src={email} alt="email" className="email" /> */}
                <input type="text" placeholder="Enter Your Email/Number" className="name" />
              </div>
              <div className="second-input">
                {/* <img src={pass} alt="pass" className="email" /> */}
                <input type="password" placeholder="Enter Your Password" className="name" />
              </div>
              <div className="login-button">
                <button>Login</button>
              </div>

              <p className="link">
                <a href="Forgotp">Forgot Password ?</a> Or<a href="Signin"> Create Account</a>
               <br></br> <a href="Add">RENT</a>
              </p>
            </div>
            </form>
          </div>


        </div>
        {/* <div className="advert">
          <img src={addvertise} alt="addvertise" className="addvert_image" />

        </div> */}
      </div>
    </>
        );

}
export default Login;