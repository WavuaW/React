// App.js
import React from 'react';
import UserList from './UserList';

const App = () => {
  // Assuming you have a list of users
  const users = [
    { name: 'John Doe', email: 'john@example.com', age: 25 },
    { name: 'Jane Doe', email: 'jane@example.com', age: 30 },
    // Add more user data as needed
  ];

  return (
    <div>
      <h1 style>Welcome to Safu CRM</h1>
      <UserList users={users} />
    </div>
  );
};

export default App;