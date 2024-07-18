import React from "react";
import cn from "classnames";

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.opened !== undefined ? props.opened : true,
        }
    }

    toggle = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }))
    }
    render() {
        const {isOpen} = this.state;
        const {text} = this.props;

        return (
            <div>
                <p>
                    <a className="btn btn-primary"
                       data-bs-toggle="collapse"
                       href="#"
                       role="button"
                       aria-expanded={isOpen}
                       onClick={(e) => {
                           e.preventDefault();
                           this.toggle();
                       }}
                    >
                        Link with href
                    </a>
                </p>
                <div className={cn('collapse', {show: isOpen})}>
                    <div className="card card-body">
                        {text}
                    </div>
                </div>
            </div>
        )
    }
}

export default Collapse