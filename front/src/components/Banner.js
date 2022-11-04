import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/banner.css';
import { accountService } from '../_services/account.service';

const Banner = () => {

    const logout = () => {
        accountService.logout()
    }

    return (
        <div className='banniere'>
            <NavLink to='/post'>
                <ul>
                    <li>Publications</li>
                </ul>
            </NavLink>
            <NavLink to='/'>
                <ul>
                    <li onClick={(logout)}>Me déconnecter</li>
                </ul>
            </NavLink>
        </div>
    );
};

export default Banner;