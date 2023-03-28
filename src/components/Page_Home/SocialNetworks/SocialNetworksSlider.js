import React from 'react';
import SocialNetworkItem from './../SocialNetworkItem/SocialNetworkItem';
import styles from './SocialNetworks.module.scss';
import SlickSlider from 'react-slick';
import './SocialNetworksSlider.scss';


export default function SocialNetworksSlider() {
  const settings = {
    className: 'socialNetwork-slider',
    dots: false,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipe: true,
    speed: 700,
    zIndex: 1000,
  }

  return (
    <div className={styles.sliderTablet}>
      <SlickSlider {...settings} >
        <SocialNetworkItem />
        <SocialNetworkItem />
        <SocialNetworkItem />
        <SocialNetworkItem />
        <SocialNetworkItem />
        <SocialNetworkItem />
      </SlickSlider >
      <span></span>
    </div>
  )
}
