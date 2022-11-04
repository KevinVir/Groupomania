import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import App from './App';
import('./styles/body.css');

const root = ReactDOM.createRoot(document.getElementById('root'));

// L'intercepteur de requête axios est la configuration par défaut ajoutée automatiquement à chaque requête utilisateur.

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers = { 'Authorization': 'Bearer ' + token }
    }
    return config;
  },
  error => Promise.reject(error)
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);