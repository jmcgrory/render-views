import React, { useState } from 'react';
import Model from './Model';

interface CommentProps {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

const CommentModel = ({ comment, children }:{ comment: CommentProps, children: any }) => {

    const [ model, setModel ] = useState(comment);

    return (
        <Model>
        {
            ({ modelMethod }) => <article>{ children({ model: model, method: modelMethod }) }</article>
        }
        </Model>
    );
}

export default CommentModel;
