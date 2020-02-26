import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import PrivateRoute from './utils/PrivateRoute';
import Login from './components/Login';
import Friends from './components/Friends';

function App() {
  return (
    <Router>
        <Link to="/">Login</Link>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/friends" component={Friends} />
      </div>
    </Router>
  );
}

export default App;
