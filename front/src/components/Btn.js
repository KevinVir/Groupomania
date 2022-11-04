import React from 'react';
import '../styles/btn.css'

const Btn = (props) => {
    return (
        <button className='btn'>{props.children}</button>
    );
};

export default Btn;