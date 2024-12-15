import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import webLogo from '../assets/web-logo.svg'
import dArrow from '../assets/icons8-dropdown-30.png'
import cross from '../assets/icons8-cross-50.png'
import signUpPic from '../assets/signUp.svg'
import google from '../assets/googleLogo.svg'
import faceBook from '../assets/facebookLogo.svg'
import eye from '../assets/eyeLogo.svg'
import user1 from '../assets/user4.jpg'
const Navbar = ({isLogin, login}:{isLogin:boolean, login:()=>void}) => {
  return (
    <div className="container d-none d-lg-flex align-items-center justify-content-between p-3">
      <a href="/">
        <img src={webLogo} width="162.57px" height="24px" alt="Logo" />
      </a>
      <SearchBar />
      <div className="d-flex align-items-center gap-1">
        {!isLogin?<button
          className="btn custom-btn-create p-0 m-0"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Create Account. <span className="text-primary fw-bold">It's Free!</span>
        </button>:
        <button className="d-flex align-items-center gap-2 p-0 m-0 btn">
          <img className="rounded-circle" alt="Profile" src={user1} width="36" height="36"/>
        <div className="text-wrapper">Siddharth Goyal</div>
        </button>}
        <ProfileDropdown />
        <SignupModal  login={login} />
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <form className="d-flex" style={{ width: "360px", borderRadius: "21px" }}>
      <button className="custom-search" type="submit">
        <img alt="Search" src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-search-24px'%20clip-path='url(%23clip0_1_1172)'%3e%3cpath%20id='Vector'%20d='M14.2083%2012.8333H13.4842L13.2275%2012.5858C14.1258%2011.5408%2014.6667%2010.1842%2014.6667%208.70833C14.6667%205.4175%2011.9992%202.75%208.70833%202.75C5.4175%202.75%202.75%205.4175%202.75%208.70833C2.75%2011.9992%205.4175%2014.6667%208.70833%2014.6667C10.1842%2014.6667%2011.5408%2014.1258%2012.5858%2013.2275L12.8333%2013.4842V14.2083L17.4167%2018.7825L18.7825%2017.4167L14.2083%2012.8333ZM8.70833%2012.8333C6.42583%2012.8333%204.58333%2010.9908%204.58333%208.70833C4.58333%206.42583%206.42583%204.58333%208.70833%204.58333C10.9908%204.58333%2012.8333%206.42583%2012.8333%208.70833C12.8333%2010.9908%2010.9908%2012.8333%208.70833%2012.8333Z'%20fill='%237A7A7A'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1172'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" width="22" height="22" />
      </button>
      <input
        className="form-control custom-input-search"
        type="search"
        placeholder="Search for your favorite groups in ATG"
        aria-label="Search"
      />
    </form>
  );
};

const ProfileDropdown = () => {
  return (
    <div className="d-flex align-items-center">
      <img
        className="rounded-circle"
        alt="Profile"
        src={dArrow}
        height='15px'
        width='15px'
      />
    </div>
  );
};

const SignupModal = ({login}:{login:()=>void}) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered position-relative">
        <button
          type="button"
          className="btn position-absolute"
          data-bs-dismiss="modal"
          style={{ top: "10px", right: "-25px" }}
        >
          <img className="rounded-circle bg-white"  src={cross} alt="close" />
        </button>
        <div className="modal-content">
          <div className="modal-header custom-modal-header d-flex justify-content-center mb-4">
            Let's learn, share & inspire each other with our passion for computer
            engineering. Sign up now 🤘🏼
          </div>
          <div className="px-4">
            <SignupForm login={login} />
          </div>
        </div>
      </div>
    </div>
  );
};

const SignupForm = ({login}:{login:()=>void}) => {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <>
      <div className="d-flex  justify-content-between align-items-center mb-4">
        <h4 className="d-flex fw-bold">{isSignIn ? "Sign In" : "Sign Up"}</h4>
        <button
          
          className="btn"
          onClick={() => setIsSignIn(!isSignIn)}
        >
          {isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
        </button>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <form>
              <div className="d-flex flex-column gap-2">
                <input type="email" className="form-control custom-input" placeholder="Email" />
                <div className="d-flex align-items-center justify-content-between position-relative">
                  <input
                    type="password"
                    className="form-control custom-input"
                    placeholder="Password"
                  />
                  <button
                    className="btn position-absolute"
                    style={{ right: "10px" }}
                  >
                    <img src={eye} alt="eye" width="18px" height="18px" />
                  </button>
                </div>
                {!isSignIn && (
                  <input
                    type="password"
                    className="form-control mb-4 custom-input"
                    placeholder="Confirm password"
                  />
                )}
                <button
                  className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4"
                  data-bs-dismiss="modal"
                  type="button"
                  onClick={login}
                >
                  {isSignIn ? "Sign In" : " Create an Account"}
                </button>
                <div className="d-flex flex-column gap-2">
                  <button className="btn d-flex align-items-center justify-content-center gap-2 button-signup-group">
                    <img src={faceBook} alt="facebook" />
                    Sign In with Facebook
                  </button>
                  <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
                    <img src={google} alt="google" />
                    Sign In with Google
                  </button>
                </div>
                <button className="btn d-none d-lg-block text-center forgot">
                  Forgot Password?
                </button>
              </div>
            </form>
          </div>
          <div className="col">
            <div className="d-flex flex-column">
              <img src={signUpPic} alt="atg-illustration" />
              <p className="info-signup">
                By signing up, you agree to our Terms & conditions, Privacy policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
