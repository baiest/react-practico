import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/3171830/pexels-photo-3171830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="imagen pexel.com" />
        <div className="carousel-item__details">
            <div className="carousel-item__options">
                <img src={playIcon} alt="play" />
                <img src={plusIcon} alt="plus" />
            </div>
            <p className="carousel-item__details--title">Titulo descriptivo</p>
            <p className="carousel-item__details--subtitle">2019 16+ 114min</p>
        </div>
    </div>
);

export default CarouselItem;