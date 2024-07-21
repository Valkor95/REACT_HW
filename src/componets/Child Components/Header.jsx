import React from "react";

const Header = ({children, toggle}) => (
    <div className="modal-header">
        <div className="modal-title">{children}</div>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
)

export default Header