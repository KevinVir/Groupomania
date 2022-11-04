import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/modify.css';

const Modify = ({ post }) => {

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
                    console.log(res)
                    window.location.reload();
                    alert('Votre publication a bien été modifiée')
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
                            <textarea name="post" id="post" cols="30" rows="10" maxLength='1500'
                                value={publication}
                                onChange={(e) => setPublication(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <div className='btn-modify'>
                            <label htmlFor="file"></label>
                            <input className='input-file' id='file' type="file" accept="image/*"
                                onChange={(e) => setImage(e.target.files[0], e.target.files[0].name)}
                            />
                            <button className="btn-post btn-modifier">MODIFIER</button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default Modify;