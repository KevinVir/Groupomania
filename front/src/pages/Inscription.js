// Utilisation de RSC (React Stateless Component)

import React from 'react';
import Navigation from '../components/Navigation';
import SignUp from '../components/SignUp';
import '../styles/connexionETinscription.css';
import logo from '../assets/logoG.png';

const Inscription = () => {
    return (
        <main className="main-form">
            <section className='section-onglet'>
                <div className="bloc-form">
                    <Navigation />
                    <SignUp />
                    <img src={logo} alt="Logo Groupomania" />
                </div>
            </section>
        </main>
    );
};

export default Inscription;