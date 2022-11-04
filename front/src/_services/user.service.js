import Axios from './caller.service';

let getAllUsers = () => {
    return Axios.get('api/auth/users');
}

let getUser = (userId) => {
    return Axios.get('api/auth/users/' + userId)
}

export const userService = {
    getAllUsers, getUser
}