import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const App = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const _handleLogin = () => {
    alert(`User name is ${userName} \nPassword: ${password}`);
  };
  return (
    <div class="login-container">
      <h3>Home Page2</h3>
      <div class="input-group">
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div class="input-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div class="input-group">
        <input type="button" value="Login" onClick={_handleLogin} />
      </div>
    </div>
  );
};

export default App;
