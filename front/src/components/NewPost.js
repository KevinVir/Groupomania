import React, { useState } from 'react';
import '../styles/btn.css';
import '../styles/newpost.css';
import axios from 'axios';


const Post = ({ setPosts }) => {

    const [publication, setPublication] = useState('');
    const [image, setImage] = useState();

    const onSubmit = async (e) => {
        e.preventDefault();

        const userId = localStorage.getItem('userId')

        const data = new FormData();
        data.append('userId', userId);
        data.append('publication', publication);
        data.append('image', image)
        data.forEach((value, key) => {
            console.log(key + " " + value)
        })

        axios.post(`http://localhost:3000/api/posts`, data)
            .then((res) => {
                alert(res.data.message)
                axios.get(`http://localhost:3000/api/posts`)
                    .then((posts) => {
                        setPosts(posts.data)
                    })
            })
            .catch((error) => console.log('erreur: ' + error))
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="top-bloc">
                <div className="publication">
                    <label htmlFor="post"></label>
                    <textarea name="post" id="post" cols="30" rows="10" maxLength='1500' placeholder="Comment allez vous aujourd'hui ?"
                        value={publication}
                        onChange={(e) => setPublication(e.target.value)}>
                    </textarea>
                </div>
            </div>
            <div className="file-btn-publication">
                <label htmlFor="file-img">
                    <input className='input-file' id='file-img' type="file" accept="image/*" aria-label='file-img'
                        onChange={(e) => setImage(e.target.files[0], e.target.files[0].name)}
                    />
                </label>
                <button className="btn-post">PUBLIER</button>
            </div>
        </form >
    );
};

export default Post;
