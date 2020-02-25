import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1>Friends</h1>
      </header>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="login" component={login} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </div>
    </Router>
  );
}

export default App;
