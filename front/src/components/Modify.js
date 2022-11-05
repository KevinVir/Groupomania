import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/modify.css';

const Modify = ({ post, posts, setPosts }) => {

    const { id } = useParams();


    const [isAuthor, isSetAuthor] = useState(false)
    const userId = localStorage.getItem('userId');
    const isAdmin = localStorage.getItem('isAdmin');

    useEffect(() => {
        const checkAuthor = () => {
            if (userId === post.user || isAdmin === 'true') {
                isSetAuthor(true)
            }
        };
        checkAuthor();
    }, [userId, post.user, isAdmin])


    const [publication, setPublication] = useState('');
    const [image, setImage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        function postData() {

            const data = new FormData();
            data.append('userId', userId);
            data.append('publication', publication);
            if (image) {
                data.append('image', image)
            }

            data.forEach((value, key) => {
                console.log(key + " " + value)
            })

            axios.put(`http://localhost:3000/api/posts/${id}`, data)
                .then((res) => {
                    alert(res.data.message)
                })
                .catch((error) => console.log('erreur: ' + error))
        }
        postData()
    }

    return (
        <>
            {isAuthor === true && (
                <div className='Modify'>
                    <form onSubmit={onSubmit}>
                        <div className='postModify'>
                            <label htmlFor="post-text"></label>
                            <textarea name="post-text" id="post-text" cols="30" rows="10" maxLength='1500'
                                value={publication}
                                onChange={(e) => setPublication(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <div className='btn-modify'>
                            <label htmlFor="file-img">
                                <input className='input-file' id='file-img' type="file" accept="image/*"
                                    onChange={(e) => setImage(e.target.files[0], e.target.files[0].name)}
                                />
                            </label>
                            <button className="btn-post btn-modifier">MODIFIER</button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default Modify;