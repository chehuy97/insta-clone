import "./login.scss";
import phoneCrop from "../../Assets/Images/crop/phoneCrop.png";
import footerLogin from "../../Assets/Images/crop/footerLogin.png";
import { images } from "../../Utils/AppContant";
import TextField from "@material-ui/core/TextField";
import { useState } from 'react'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

   const handle_login = () => {
    if(username == 'admin' && password == 'password'){
        console.log('ok');
        localStorage.setItem('@authenticated', 'has')
    } else {
        alert('wrong username and password')
    }
   }
    
  return (
    <div className="login-container">
      <div className="wrapper">
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
          <button className="login-btn" onClick={() => handle_login()}>
            log in
          </button>
          <div className='or-wrapper'>
              <div className='line'/>
              <p className='or-text'>OR</p>
              <div className='line'/>
          </div>
          <p className='forgot-password'>Forgot password</p>
        </form>
      </div>
      <img src={footerLogin} className="footer" />
    </div>
  );
};

export default Login;
