import React from "react";
import cn from "classnames";
import Header from "./Child Components/Header.jsx";
import Body from "./Child Components/Body.jsx";
import Footer from "./Child Components/Footer.jsx";

class Modal extends React.Component {
    static Header = Header;
    static Body = Body;
    static Footer = Footer;

    render() {
        const {isOpen, children} = this.props;
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
        )
    }
}

// const Modal = ({isOpen, children}) => {
//     const modalClass = cn('modal', {
//         'fade show': isOpen
//     });
//     return (
//         <div className={modalClass} style={{display: isOpen ? 'block' : 'none'}} role="dialog">
//             <div className='modal-dialog'>
//                 <div className='modal-content'>
//                     {children}
//                 </div>
//             </div>
//         </div>
//     );
// }

// Modal.Header = Header;
// Modal.Body = Body;
// Modal.Footer = Footer;

export default Modal