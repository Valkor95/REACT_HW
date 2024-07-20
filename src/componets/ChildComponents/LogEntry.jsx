import React from "react";

const LogEntry = ({value, onRemove}) => (
    <button type="button" className="list-group-item list-group-item-action" onClick={onRemove}>
        {value}
    </button>
);

export default LogEntry;