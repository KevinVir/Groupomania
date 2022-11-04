import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faAt, faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/form.css';
import 'font-awesome/css/font-awesome.min.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { accountService } from '../_services/account.service';
import Btn from './Btn';

const Inscription = () => {

    let navigate = useNavigate();

    const [identifiants, setIdentifiants] = useState({
        email: '',
        pseudo: '',
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
        accountService.signup(identifiants)
            .then(res => {
                accountService.saveToken(res.data.token)
                navigate('/')
                alert('Votre compte a bien été crée, vous pouvez vous connecter.')
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="formOnglet form-register">
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <div className="email">
                    <input type="email" name="email" id="email" placeholder="Tapez votre adresse email" required value={identifiants.email} onChange={onChange} />
                    <FontAwesomeIcon icon={faAt} className='i'></FontAwesomeIcon>
                </div>
                <label htmlFor="pseudo">Pseudo</label>
                <div className="pseudo">
                    <input type="text" name='pseudo' id='pseudo' placeholder="Tapez votre pseudo" maxLength='10' required value={identifiants.pseudo} onChange={onChange} />
                    <FontAwesomeIcon icon={faUser} className='i'></FontAwesomeIcon>
                </div>
                <label htmlFor="password">Mot de passe</label>
                <div className="password">
                    <input type="password" name="password" id="password" placeholder="Tapez votre mot de passe" minLength="6" required value={identifiants.password} onChange={onChange} />
                    <FontAwesomeIcon icon={faLock} className='i'></FontAwesomeIcon>
                </div>
                <Btn>INSCRIPTION</Btn>
            </form>
        </div>
    );
};

export default Inscription;