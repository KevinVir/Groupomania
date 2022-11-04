import Axios from './caller.service';

let getAllPosts = () => {
    return Axios.get('/api/posts');
}

let getPost = (id) => {
    return Axios.get('/api/posts/' + id)
}

let LikePost = (id) => {
    return Axios.post(`/api/posts/${id}/like`)
}

export const postService = {
    getAllPosts, getPost, LikePost
}