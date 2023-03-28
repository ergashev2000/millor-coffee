import React from 'react';
import styles from './Slider.module.scss';
import SlickSlider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from '../SliderItem/SliderItem';
import './Slider.scss';


export default function Slider() {

  const settings = {
    className: 'HomeSlider',
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    swipe: true,
  };

  return (

    <section className={styles.slider}>
      <div className='container'>
        <SlickSlider {...settings}>
          <SliderItem />
          <SliderItem />
          <SliderItem />
        </SlickSlider>
      </div>
    </section>
  );
}



