import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import SwitchedRoutes from '@/Routes/';
import './App.css';

// Needs hash router for frontend routing
function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <SwitchedRoutes />
      </Router>
    </div>
  )
}

export default App
