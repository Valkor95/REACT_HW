import React from "react";

class Definitions extends React.Component {
    render() {
        const definitions = [
            {dt: 'one', dd: 'two', id: 1},
            {dt: 'another term', dd: 'another description', id: 2},
        ];

        return <div>
        <dl>
            <dt>one</dt>
            <dd>two</dd>
            <dt>another term</dt>
            <dd>another description</dd>
        </dl>

        <dl>
            <dt>Coffee</dt>
            <dd>Black hot drink</dd>
            <dt>Milk</dt>
            <dd>White cold drink</dd>
        </dl>
        </div>
    }
}

export default Definitions