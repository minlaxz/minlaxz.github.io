import React from 'react';
import ReactDOM from 'react-dom';

// Analytics
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga';

// Redux
import { Provider as ReduxProvider } from 'react-redux';
import store from '@/Store';

import 'react-toastify/dist/ReactToastify.min.css';
import './index.css';
import App from './App';

import DarkThemeProvider from "@/Providers/DarkThemeProvider";
import DarkThemeToggle from "@/Components/DarkThemeToggle";
import ModToastContainer from "@/Components/ModToastContainer";

ReactGA.initialize('UA-167479267-1');

ReactDOM.render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <DarkThemeProvider>
                <DarkThemeToggle />
                <ModToastContainer />
                <App />
            </DarkThemeProvider>
        </ReduxProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

function sendToAnalytics({ id, name, value }) {
    console.log(id, name, value);
    ReactGA.ga('send', 'event', {
        eventCategory: 'Web Vitals',
        eventAction: name,
        eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
        eventLabel: id, // id unique to current page load
        nonInteraction: true, // avoids affecting bounce rate
    });
}

reportWebVitals(sendToAnalytics);
