import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faAt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import '../styles/form.css';
import { accountService } from '../_services/account.service';
import { useNavigate } from 'react-router-dom';
import Btn from './Btn';

const Login = () => {

    let navigate = useNavigate();

    const [identifiants, setIdentifiants] = useState({
        email: '',
        password: ''
    });

    // En rentrant dans le onChange, je vais déclencher la mutation
    const onChange = (e) => {
        setIdentifiants({
            // Je vais fusionner l'ancienne étape identifiants
            ...identifiants,
            // Avec la nouvelle
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        accountService.login(identifiants)
            .then(res => {
                accountService.saveToken(res.data.token)
                accountService.saveUserId(res.data.userId)
                accountService.saveIsAdmin(res.data.isAdmin)
                navigate('/post')
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="formOnglet">
            <form onSubmit={onSubmit}>
                <label htmlFor='email'>Email</label>
                <div className='email'>
                    <input type='email' name='email' id='email' placeholder='Tapez votre adresse email' value={identifiants.email} onChange={onChange} />
                    <FontAwesomeIcon icon={faAt} className='i'></FontAwesomeIcon>
                </div>
                <label htmlFor='password'>Mot de passe</label>
                <div className='password'>
                    <input type='password' name='password' id='password' placeholder='Tapez votre mot de passe' value={identifiants.password} onChange={onChange} />
                    <FontAwesomeIcon icon={faLock} className='i'></FontAwesomeIcon>
                </div>
                <Btn>CONNEXION</Btn>
            </form>
        </div>
    );
};

export default Login;