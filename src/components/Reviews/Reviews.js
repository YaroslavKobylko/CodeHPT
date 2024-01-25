import React, { useState, useEffect } from 'react';
import './Reviews.css';
<<<<<<< HEAD
import First from './msg795295778-225764.jpg';
import Second from './msg795295778-225768.jpg';
import Third from './msg795295778-225770.jpg';
import Fourth from './msg795295778-225771.jpg';

const Reviews = () => {
  const photos = [First, Second, Third, Fourth];
=======
import First from "./msg795295778-225764.jpg";
import Second from "./msg795295778-225768.jpg";
import Third from "./msg795295778-225770.jpg";

const Reviews = () => {
  const photos = [
    First,
    Second,
    Third,

    // Додайте інші URL-адреси фотографій за потреби
  ];
>>>>>>> 338712e785a9c24c9fc41a330717adbbbff6d760

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
<<<<<<< HEAD
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const intervalId = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000);
=======
    const intervalId = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000); // Інтервал зміни фотографії кожні 5 секунд
>>>>>>> 338712e785a9c24c9fc41a330717adbbbff6d760

    return () => clearInterval(intervalId);
  }, [currentPhotoIndex, photos.length]);

  return (
    <div className="reviews-container" id="reviews">
      <h1 className="reviews-heading">Відгуки</h1>
      <div className="pic-ctn">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`photo-${index}`}
            className={`pic ${index === currentPhotoIndex ? 'active' : 'hidden'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;