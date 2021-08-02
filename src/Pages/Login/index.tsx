import "./login.scss";
import phoneCrop from "../../Assets/Images/crop/phoneCrop.png";
import footerLogin from "../../Assets/Images/crop/footerLogin.png";
import { images } from "../../Utils/AppContant";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from 'react'
import { siginInWithFacebookMethod } from '../../firebase/firebase.utils'
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation()
    const history = useHistory();
    // let { from } = location.state || { from: { pathname: "/project" } };

   const handle_login = () => {
    if(username == 'admin' && password == 'password'){
        console.log('ok');
        localStorage.setItem('@authenticated', 'has')
        history.replace('/project')
    } else {
        alert('wrong username and password')
    }
   }

   const login_success = () => {
     console.log('LOGIN SUCCESS');
     
   }
   
    
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <img src={phoneCrop} />
        <form className="form" noValidate autoComplete="off">
          <img src={images.logo} className="img-login" />
          <TextField
            id="standard-basic"
            label="Username"
            className="textfield"
            size="small"
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Password"
            type='password'
            className="textfield"
            size="small"
            onChange={e => setPassword(e.target.value)}
          />
          <div className="login-btn" onClick={() => handle_login()}>
            log in
          </div>
          <div className='or-wrapper'>
              <div className='line'/>
              <p className='or-text'>OR</p>
              <div className='line'/>
          </div>
          <div className='wrapper-fb' onClick={() => siginInWithFacebookMethod(login_success)}>
            <img src='https://brandslogo.net/wp-content/uploads/2016/09/facebook-icon-preview-1.png' className='img-fb'/>
            <p className='text-fb'>Log in with Facebook</p>
          </div>
          <p className='forgot-password'>Forgot password</p>
        </form>
      </div>
      <img src={footerLogin} className="footer" />
    </div>
  );
};

export default Login;
