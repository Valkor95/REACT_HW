import React from "react";
import pt from 'prop-types'
import PropTypes from "prop-types";
import styles from './styles.module.scss'

class PostCatalog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data} = this.props
        return (
                <div className={`posts ${styles.flex}`}>
                    <ul className={`posts__list ${styles.ul}`}>
                        {data.map((item) => {
                            return (
                                <li
                                    key={item.id + '|' + item.title[0]}
                                    className={`posts_single-post ${styles.li}`}
                                    data-post-id={item.id}
                                >
                                    <h3 className='posts_post-title'>{item.id + ' | ' + item.title}</h3>
                                    <p className='posts_post-description'>{item.body}</p>
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