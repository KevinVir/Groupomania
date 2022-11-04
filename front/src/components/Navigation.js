import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation.css';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to='/' end className={({ isActive }) => (isActive ? 'active-nav' : '')}>
                    <li>Connexion</li>
                </NavLink>
                <NavLink to='/inscription' className={({ isActive }) => (isActive ? 'active-nav' : '')}>
                    <li>Inscription</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;