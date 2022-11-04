import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation.css';

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink to='/' end className={({ isActive }) => (isActive ? 'active-nav' : '')}>
                <ul>
                    <li>Connexion</li>
                </ul>
            </NavLink>
            <NavLink to='/inscription' className={({ isActive }) => (isActive ? 'active-nav' : '')}>
                <ul>
                    <li>Inscription</li>
                </ul>
            </NavLink>
        </div>
    );
};

export default Navigation;