import React, { ReactElement } from 'react';

interface ModelProps {
    children: ({}:{modelMethod:any}) => ReactElement;
}

const Model = ({ children }:ModelProps) => {
    const modelMethod = () => {
        console.log('METHOD FIRED!');
    }
    return children({ modelMethod: modelMethod });
}

export default Model;
