import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

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

Alert.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'
    ]).isRequired
}

export default Alert