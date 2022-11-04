import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import NewPost from '../components/NewPost';
import Post from '../components/Post';
import axios from 'axios';

const Posts = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/posts`)
            .then((res) => {
                setPosts(res.data)
                setUsers(res.data.user)
                console.log(res.data.user)
            })
    }, [])

    return (
        <div>
            <Banner />
            <section className='bloc-post'>
                <NewPost setPosts={setPosts} posts={posts} />
            </section>
            <section className='bloc-newpost'>
                {posts.map((post, index) => (<Post key={index} posts={posts} users={users} setPosts={setPosts} post={post} />))}
            </section>
        </div>
    );
};

export default Posts;