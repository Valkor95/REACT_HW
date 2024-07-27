import React from "react";
import pt from 'prop-types'
import PropTypes from "prop-types";

class PostCatalog extends React.Component {
    constructor(props) {
        super(props);
        const {data} = this.props
    }

    render() {
        const {data} = this.props
        return (
            <div className='posts'>
                <ul className='posts__list'>
                    {data.map(({id, title, body}) =>{
                        return (
                            <li
                                className='posts_single-post'
                                data-post-id={id}

                            >
                                <h3 className='posts_post-title'>{title}</h3>

                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

PostCatalog.propTypes = {
    data: PropTypes.array.isRequired
}

export default PostCatalog