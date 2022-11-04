import React from 'react';
import logo from '../assets/logoG.png'
import '../styles/error.css';

const Error = () => {
    return (
        <div className='error'>
            <img src={logo} alt="Logo Groupomania" />
            <h1>Erreur 404</h1>
            <p>L'URL demandée n'a pas été trouvée sur ce serveur.</p>
        </div>
    );
};

export default Error;