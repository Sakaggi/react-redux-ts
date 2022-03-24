import React from 'react';
import LeftBody from './LeftBody';
import RightBody from './RightBody';


const MainBody = () => {
    return (
        <>
            <div className='container'>
                <LeftBody />
                <RightBody />
            </div>
        </>
    );
};

export default MainBody;
