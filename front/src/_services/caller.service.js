import axios from 'axios';
import { accountService } from './account.service';

const Axios = axios.create({
    baseURL: 'http://localhost:3000'
});

// Intercepteur pour le token
// Axios va attraper la requête au moment où elle sort du front

Axios.interceptors.request.use(request => {

    if (accountService.isLogged()) {
        request.headers.Authorization = 'Bearer ' + accountService.getToken()
    }
    return request
})

export default Axios;