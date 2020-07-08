import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';

const API_URL = 'https://sgitconnected.com/v1/portfolio/mauriciorobayo';

WebFont.load({
  google: {
    families: ['IBM Plex Mono:700', 'IBM Plex Sans:400,700'],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App apiUrl={API_URL} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
