import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  const history = useHistory();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear session, etc.)
    onLogout();
    history.push('/'); // Redirect to the login page after logout
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;