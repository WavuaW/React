import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Perform authentication logic here (e.g., API call, etc.)
    // For simplicity, just check if both username and password are not empty
    if (username && password) {
      onLogin(username);
      history.push('/dashboard'); // Redirect to the dashboard after successful login
    } else {
      alert('Please enter valid credentials.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;