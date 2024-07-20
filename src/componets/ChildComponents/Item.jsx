import React from "react";

const Item = ({task, onRemove}) => {
    return (
        <div>
            <div className="row">
                <div className="col-auto">
                    <button type="button" className="btn btn-primary btn-sm" onClick={onRemove}>-</button>
                </div>
                <div className="col">{task.text}</div>
            </div>
            <hr />
        </div>
    );
};

export default Item;
