import React from 'react';

//Our component that tells the user how many entries they've submitted
const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='white f3'>
                {`${name}, your current entries are...`}
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;