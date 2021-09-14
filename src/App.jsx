import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import SwitchedRoutes from '@/Routes/';

// Needs hash router for frontend routing
function App() {
  return (
    <div style={{
      backgroundColor: '#f5f5f5',
    }}>
      <Router basename='/'>
        <SwitchedRoutes />
      </Router>
    </div>
  )
}

export default App
