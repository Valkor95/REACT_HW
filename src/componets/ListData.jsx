import React from "react";

const ListData = ({title, body}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export default ListData;
