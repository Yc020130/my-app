import React,{ useState } from 'react';
import Login from './login';

function App() {
  const [user,setUser] = useState(null);

  return (
      <div className="App">
      {user ? (
        <h2>欢迎回来，{user}！</h2>
      ) : (
        <Login onLogin={setUser} />
      )}
    </div>
  );
}

export default App;
