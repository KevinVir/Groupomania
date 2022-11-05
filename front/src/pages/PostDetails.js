import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Banner from '../components/Banner';
import PostDetail from '../components/PostDetail';
import Modify from '../components/Modify';

const PostDetails = () => {

    const { id } = useParams();
    const [post, setPost] = useState([]);
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('')

    // Récupération d'un post en fonction de son ID unique
    useEffect(() => {
        axios.get(`http://localhost:3000/api/posts/${id}`)
            .then((res) => {
                console.log(res.data)
                setPost(res.data.post)
                setUsers(res.data.users)
            })
            .catch((error) => console.log("erreur: " + error))
    }, [id])

    return (
        <>
            <Banner />
            <section className='bloc-newpost'>
                <PostDetail post={post} setPost={setPost} users={users} setUsers={setUsers} user={user} />
                <Modify post={post} setPost={setPost} posts={posts} setPosts={setPosts} />
            </section>
        </>
    );
};

export default PostDetails;