import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/posts.css';
import axios from 'axios';

const Likes = ({ post }) => {

    const id = post._id
    const [likes, setLikes] = useState(0)

    useEffect(() => {
        setLikes(post.likes)
    }, [post])

    function liker() {

        axios.post(`http://localhost:3000/api/posts/${id}/like`, {})
            .then((res) => {
                console.log(res)
                setLikes(res.data.post.likes)
            })
            .catch((error) => console.log('erreur: ' + error))
    }

    return (
        <div>
            <button className='btn-like' onClick={() => liker()}>
                <FontAwesomeIcon icon={faThumbsUp} size='xl' className='iLike' title="Aimer cette publication"
                    style={{ color: "rgb(33, 204, 33)" }}
                />
            </button>
            <span className="likes-counter">{likes}</span>
        </div>

    );
};

export default Likes;