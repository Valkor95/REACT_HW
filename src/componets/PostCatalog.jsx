import PropTypes from "prop-types";
import styles from './styles.module.scss'

const PostCatalog = ({data}) => {
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
    );
};


PostCatalog.propTypes = {
    data: PropTypes.array.isRequired
}

export default PostCatalog