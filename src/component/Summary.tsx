import React from "react";

const Summary = ({ email, title, onClick }: any) => {

    return (
        <div onClick={onClick}>
            <h4>{ title } - <em>{ email }</em></h4>
        </div>
    );

}

export default Summary;
