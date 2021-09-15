import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-167479267-1');

// Redux
import { Provider } from 'react-redux';
import store from '@/Store';
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

function sendToAnalytics({ id, name, value }) {
  console.log(id, name, value);
  // const body = JSON.stringify(metric);
  // const url = 'https://example.com/analytics';
  ReactGA.ga('send', 'event', {
    eventCategory: 'Web Vitals',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate
  });
}

reportWebVitals(sendToAnalytics);
