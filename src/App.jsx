import Carousel from './componets/Carousel.jsx';
import firstImage from './images/first.jpg';
import secondImage from './images/second.jpg';
import thirdImage from './images/third.jpg';

function App() {
    const image = [firstImage, secondImage, thirdImage];
    return (
        <div className="App">
            <Carousel images={image} />
        </div>
    );
}

export default App;