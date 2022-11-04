import React from 'react';
import '../styles/newpost.css';
import '../styles/posts.css';
import '../styles/btn.css';
import Likes from './Likes';
import { NavLink } from 'react-router-dom';
import OptionBtn from './OptionBtn';

const NewPost = ({ post, posts, setPosts }) => {


    const uid = localStorage.getItem('userId')
    const isAdmin = localStorage.getItem('isAdmin')
    const isAuthor = (uid === post.user._id || isAdmin === 'true');

    return (
        <div>
            <div className='details'>
                <NavLink to={`/post/${post._id}`} title="Voir la publication en détail">
                    <div className='info-publi'>
                        Publié par: <strong>{post.user.pseudo}</strong>
                    </div>
                    <div className='publicationTest'>
                        <div>{post.publication}</div>
                    </div>
                    {post.image !== '' && (
                        <div className='publiImg'>
                            <img src={post.image} alt="" />
                        </div>
                    )}
                </NavLink>
                <div className='option-publication'>
                    {isAuthor ? <OptionBtn post={post} posts={posts} setPosts={setPosts} /> : null}
                    <Likes post={post} />
                </div>
            </div>
        </div>
    );
};

export default NewPost;