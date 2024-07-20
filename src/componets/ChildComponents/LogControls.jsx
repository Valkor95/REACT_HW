import React from "react";

const LogControls = ({onAdd, onSubtract}) => (
    <div className="btn-group font-monospace" role="group">
        <button type="button" className="btn btn-outline-success" onClick={onAdd}>+</button>
        <button type="button" className="btn btn-outline-danger" onClick={onSubtract}>-</button>
    </div>
);

export default LogControls;