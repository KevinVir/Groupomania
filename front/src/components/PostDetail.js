import React, { useState, useEffect } from 'react';
import '../styles/posts.css';
import '../styles/body.css';
import Likes from './Likes';
import moment from 'moment'

const PostDetail = ({ post }) => {

    const [displayImage, setDisplayImage] = useState()
    const date = moment(post.createdAt)

    useEffect(() => {
        const checkAuthor = () => {
            if (post.image === '') {
                setDisplayImage(true)
            } else {
                setDisplayImage(false)
            };
        };
        checkAuthor();
    }, [post.image]);


    return (
        <div className='details'>
            <div className='info-publi'>
                Publié le: <strong>{date.format('DD MMM YYYY')}</strong>
            </div>
            <div className='publicationTest'>
                <div>{post.publication}</div>
            </div>
            {displayImage === false && (
                <div className='publiImg'>
                    <img src={post.image} alt="Img de l'utilisateur" />
                </div>
            )}
            <div className='nbLikes'>
                <Likes post={post} />
            </div>
        </div>
    );
};

export default PostDetail;