import React ,{ useState } from 'react';
//Create a React component that takes an array of images and renders them one at a time in a carousel.

const images = [
  'https://rukminim1.flixcart.com/fk-p-flap/1000/500/image/f94d7b10a30a1e67.jpg?q=50',
  'https://rukminim1.flixcart.com/fk-p-flap/1000/500/image/896ed9280bc59601.jpg?q=50',
  'https://rukminim1.flixcart.com/flap/1000/500/image/75a15c3e19c3f7de.jpg?q=50',
];

function ImageCarousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div>
      <button onClick={handlePrevClick}>Prev</button>
      <img src={images[currentImageIndex]} alt="carousel image" />
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
}

export default App;