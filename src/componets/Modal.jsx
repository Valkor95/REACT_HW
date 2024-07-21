import React from "react";
import cn from "classnames";
import Header from "./Child Components/Header.jsx";
import Body from "./Child Components/Body.jsx";

const Modal = ({isOpen, children}) => {
    const modalClass = cn('modal', {
        'fade show': isOpen
    });
    return (
        <div className={modalClass} style={{display: isOpen ? 'block' : 'none'}} role="dialog">
            <div className='modal-dialog'>
                <div className='modal-content'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal