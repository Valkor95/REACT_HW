import React from "react";

const CardBody = ({title, text}) => {
    return (
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{text}</p>
        </div>
    )
}

export default CardBody