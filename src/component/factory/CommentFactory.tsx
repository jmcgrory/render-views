import React from 'react';
import Factory from './Factory';
import { CommentModel } from '../model';

const CommentFactory = ({ children, ids = [], message = 'Load More' }: any) => {

    const endpoint = ids.length ? `comments/${ids.join(',')}` : 'comments';

    return (
        <Factory endpoint={endpoint}>
            {
                ({ update, models }: any) => (
                    <section>
                        <ol>
                            {
                                models.map((model: any, i: number) => (
                                    <CommentModel key={i} comment={model}>
                                        { children }
                                    </CommentModel>
                                ))
                            }
                        </ol>
                        <button onClick={update}>{ message }</button>
                    </section>
                )
            }
        </Factory>
    )

}

export default CommentFactory;
