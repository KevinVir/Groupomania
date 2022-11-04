// Utilisation de RSC (React Stateless Component)

import React from 'react';
import Navigation from '../components/Navigation';
import SignIn from '../components/SignIn';
import logo from '../assets/logoG.png';

const Connexion = () => {
    return (
        <main className='main-form'>
            <section className="section-onglet">
                <div className="bloc-form">
                    <Navigation />
                    <SignIn />
                    <img src={logo} alt="Logo Groupomania" />
                </div>
            </section>
        </main>
    );
};

export default Connexion;