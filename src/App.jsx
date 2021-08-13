import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import SwitchedRoutes from '@/Routes/';

// Needs hash router for frontend routing
function App() {
  return (
    <Router basename='/'>
      <SwitchedRoutes />
    </Router>

  )
}

export default App
