import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ()=>{
    const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const _handleLogin = () => {
    // alert(`User name is ${userName} \nPassword: ${password}`);
    navigate('/home')
  };
  return (
    <div className="login-container">
      <h3>Login</h3>
      <div class="input-group">
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
        <input type="button" value="Login" onClick={_handleLogin} />
      </div>
    </div>
  );
}

export default Login;