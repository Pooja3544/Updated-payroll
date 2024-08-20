import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css'; 

const ImageSlider = () => {
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isSwipeLeft = distance > 50;
        const isSwipeRight = distance < -50;

        if (isSwipeLeft) {
            console.log('Swiped left');
            // Add custom behavior for left swipe if needed
        }

        if (isSwipeRight) {
            console.log('Swiped right');
            // Add custom behavior for right swipe if needed
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [
        {
            url: "https://www.computercareers.org/wp-content/uploads/Software-Engineer-Requirements.jpeg",
            detailsLine1: "Role : Software Developer",
            detailsLine2: "Designing, Coding, Testing"
        },
        {
            url: "https://www.theladders.com/wp-content/uploads/coder_190517.jpg", 
            detailsLine1:"Role : Data Analyst",
            detailsLine2: "Analyzing data to uncover insights"
        },
        {
            url : "https://avecco.ch/wp-content/uploads/2020/10/Data-Engineer.jpg",
            detailsLine1: "Role : Quality Analyst",
            detailsLine2: "Ensuring product quality"
        }
    ]; 

    return (
        <div 
            className="slider-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index} className="slide">
                        <img src={img.url} alt={`Slide ${index}`} />
                        <p className="image-details">{img.detailsLine1}</p>
                        <p className="image-details">{img.detailsLine2}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;