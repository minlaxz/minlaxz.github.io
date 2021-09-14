import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeToggle from '@/Components/ThemeToggle';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <ThemeToggle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
