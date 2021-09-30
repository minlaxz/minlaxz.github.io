import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import SwitchedRoutes from '@/Routes/';
import ToggleableContainer from '@/Components/ToggleableStuff';
import ModToastContainer from "@/Components/ModToastContainer";

// Needs hash router for frontend routing
function App() {
  return (
    /* Every page is in `Toggleable` container making sure dark mode is available globally. */
    <ToggleableContainer>
      <Router basename='/'>
        <ModToastContainer />
        <SwitchedRoutes />
      </Router>
    </ToggleableContainer >
  )
}

export default App
