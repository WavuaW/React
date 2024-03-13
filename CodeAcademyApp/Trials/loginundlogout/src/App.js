import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <Router>
      <div>
        <Route exact path="/">
          {loggedInUser ? (
            <Redirect to="/dashboard" />
          ) : (
            <Login onLogin={handleLogin} />
          )}
        </Route>
        <Route path="/dashboard">
          {loggedInUser ? (
            <div>
              <h2>Welcome, {loggedInUser}!</h2>
              <Logout onLogout={handleLogout} />
            </div>
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </div>
    </Router>
  );
};

export default App;
