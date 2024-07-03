import React from "react";

class Definitions extends React.Component {

    renderList(){
        const {data} = this.props
        return data.map(item => (
            <React.Fragment key={item.id}>
                <dt>{item.dt}</dt>
                <dd>{item.dd}</dd>
            </React.Fragment>
        ))
    }
    render() {


        return <dl>
            {this.renderList()}
        </dl>
    }
}

export default Definitions