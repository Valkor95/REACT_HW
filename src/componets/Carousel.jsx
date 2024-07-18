import React from 'react';
import cn from 'classnames';


class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            totalImages: props.images.length,
        };
    }

    nextImage = () => {
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex + 1) % this.state.totalImages,
        }));
    };

    prevImage = () => {
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex - 1 + this.props.images.length) % this.state.totalImages,
        }));
    };

    render() {
        const { currentIndex } = this.state;
        const { images } = this.props;

        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={cn('carousel-item', { active: index === currentIndex })}
                        >
                            <img alt="" className="d-block w-100" src={image} />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    onClick={this.prevImage}
                >
          <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
          ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    onClick={this.nextImage}
                >
          <span
              className="carousel-control-next-icon"
              aria-hidden="true"
          ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}


export default Carousel;