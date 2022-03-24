import React from 'react';
import { IMetadata } from '../models/IMetadata';

const Metadata = (props: IMetadata) => {
    return (
        <div className='sidebar'>
            <div>{`${props.place}[${props.start.toLocaleDateString()}-${props.end.toLocaleDateString()}]`}</div>
            <div>{`Type: ${props.type}`}</div>
            <div>{`${props.details}`}</div>
        </div>
    );
};

export default Metadata;
