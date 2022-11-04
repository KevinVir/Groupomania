import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/banner.css';
import logoAlone from '../assets/logoAlone.png';
import { accountService } from '../_services/account.service';

const Banner = () => {

    const logout = () => {
        accountService.logout()
    }

    return (
        <div className='banniere'>
            <img src={logoAlone} alt="Logo Groupomania sans le nom du groupe" />
            <ul>
                <NavLink to='/post'>
                    <li>Publications</li>
                </NavLink>
                <NavLink to='/'>
                    <li onClick={(logout)}>Me déconnecter</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Banner;