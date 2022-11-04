import React from 'react';
import '../styles/posts.css'
import BtnDelete from './BtnDelete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const OptionBtn = ({ post, posts, setPosts }) => {

    return (
        <>
            <BtnDelete post={post} posts={posts} setPosts={setPosts} />
            <NavLink to={`/post/${post._id}`}
            // post={post} posts={posts} setPosts={setPosts}
            >
                <FontAwesomeIcon icon={faPenToSquare} size='xl' className='iLike' title="Modifier cette publication" />
            </NavLink>
        </>
    );
};

export default OptionBtn;