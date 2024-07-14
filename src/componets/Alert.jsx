import React from "react";
import cn from "classnames";

class Alert extends React.Component {
    render() {
        const {text, type} = this.props;
        const alertClass = cn('alert', `alert-${type}`);

        return (
            <div className={alertClass} role="alert">
                {text}
            </div>
        )
    }
}

export default Alert