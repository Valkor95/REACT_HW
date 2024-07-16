// import React from "react";
//
// class BtnGroup extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             leftActive: false,
//             rightActive: false
//         };
//     }
//
//     handleLeftClick = () =>{
//         this.setState({
//             leftActive: true,
//             rightActive: false
//         });
//     };
//
//     handleRightClick = () =>{
//         this.setState({
//             leftActive: false,
//             rightActive: true
//         });
//     };
//
//     render() {
//         const {leftActive, rightActive} = this.state;
//
//         return (
//             <div className="btn-group" role="group">
//                 <button
//                     type="button"
//                     className={`btn btn-secondary left ${leftActive ? 'active' : ''}`}
//                     onClick={this.handleLeftClick}
//                 >
//                     LEFT
//                 </button>
//
//                 <button
//                     type="button"
//                     className={`btn btn-secondary right ${rightActive ? 'active' : ''}`}
//                     onClick={this.handleRightClick}
//                 >
//                     RIGHT
//                 </button>
//             </div>
//         )
//     }
// }
//
// export default BtnGroup

import React from "react";

class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           activeBut: null
        };
    }

    handleButClick = (button) =>{
        this.setState({
           activeBut: button
        });
    };

    render() {
        const {activeBut} = this.state;

        return (
            <div className="btn-group" role="group">
                <button
                    type="button"
                    className={`btn btn-secondary left ${activeBut === 'left' ? 'active' : ''}`}
                    onClick={() => this.handleButClick('left')}
                >
                    LEFT
                </button>

                <button
                    type="button"
                    className={`btn btn-secondary right ${activeBut === 'right' ? 'active' : ''}`}
                    onClick={() => this.handleButClick('right')}
                >
                    RIGHT
                </button>
            </div>
        )
    }
}

export default BtnGroup