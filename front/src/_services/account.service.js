import Axios from './caller.service';


let login = (identifiants) => {
    return Axios.post('/api/auth/login', identifiants)
}

let signup = (identifiants) => {
    return Axios.post('/api/auth/signup', identifiants)
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
};

let saveUserId = (userId) => {
    localStorage.setItem('userId', userId)
}

let saveIsAdmin = (isAdmin) => {
    localStorage.setItem('isAdmin', isAdmin)
}

let logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('isAdmin')
};

let isLogged = () => {
    let token = localStorage.getItem('token')
    let userId = localStorage.getItem('userId')
    let isAdmin = localStorage.getItem('isAdmin')
    return !!token && !!userId && !!isAdmin
}

let getToken = () => {
    return localStorage.getItem('token');
}

export const accountService = {
    login, signup, saveToken, logout, isLogged, getToken, saveUserId, saveIsAdmin
};
