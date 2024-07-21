import React from "react";
import cn from "classnames";

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