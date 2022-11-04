import React from 'react';
import { Navigate } from 'react-router-dom';
import { accountService } from '../_services/account.service';

const AuthGuard = (props) => {
    const { children } = props;

    if (!accountService.isLogged()) {
        return <Navigate to='/' />
    }

    return children;
};

export default AuthGuard;