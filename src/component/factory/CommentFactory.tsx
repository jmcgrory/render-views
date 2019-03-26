import React from 'react';
import Factory from './Factory';

const CommentFactory = ({ children, ids = [], message = 'Load More' }: any) => {

    const endpoint = ids.length ? `comments/${ids.join(',')}` : 'comments';

    return (
        <Factory endpoint={endpoint}>
            {({update, models}:any) => children({ load: update, models: models })}
        </Factory>
    )

}

export default CommentFactory;
