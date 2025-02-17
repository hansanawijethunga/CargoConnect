import { useState } from 'react';
import '../styles/login.css'

import msalInstance from '../helpers/msalInstance'; 
import { loginRequest } from '../helpers/msal'; 

const Login = ()=>{
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');



  const login = async () => {
    try {
      await msalInstance.initialize();
      const loginResponse = await msalInstance.loginPopup(loginRequest);
      console.log('Login successful', loginResponse);
      // You can store the token or set a state to indicate login success
    } catch (error) {
      console.error('Login error:', error);
    }
  };  
  return (
    <div className='login-page'> 
    <div className="login-container">
      <h3>Login</h3>
      <div className="input-group">
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input type="button" value="Login" onClick={login} />
      </div>
    </div>
    </div>
  );
}

export default Login;