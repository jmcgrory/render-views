import React from "react";

const Detail = ({ id, title, content, email, onClick }: any) => {

    return (
        <div style={{border:'1px solid #ddd',padding:'1em'}}>
            <h3>{ title }</h3>
            <p><em>#{id} - {email}</em></p>
            <hr />
            <p>{ content }</p>
            <button onClick={onClick}>Select This Model</button>
        </div>
    );

}

export default Detail;
