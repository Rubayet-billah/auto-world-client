import React from 'react';

const Button = ({ text }) => {
    return (
        <button className='bg-red-400 hover:bg-red-600 ease-in-out duration-200 text-white font-semibold px-8 py-1 rounded'>
            {text}
        </button>
    );
};

export default Button;