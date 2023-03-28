import React from 'react';
import SlickSlider from 'react-slick';
import { catalog } from '../ImagesDB';
import CatalogItem from '../CatalogItem/CatalogItem';
import styles from './Catalog.module.scss';

export default function CatalogSlider() {

  const settings = {
    className: 'catalog-slider',
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: '150px',
    slidesToShow: 1,
    dotsClass: 'catalog-dots',
    swipe: true,
    speed: 700,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          centerPadding: '90px'
        }
      },
      {
        breakpoint: 580,
        settings: {
          centerPadding: '70px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '60px'
        }
      },
      {
        breakpoint: 370,
        settings: {
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 300,
        settings: {
          centerPadding: '25px'
        }
      },

    ]
  }
  return (
    <div className={styles.itemsSlider}>
      <SlickSlider {...settings} >
        <CatalogItem image={catalog[0].img} imageWebp={catalog[0].imgWebp} text={catalog[0].text} textButton={catalog[0].btn} link={catalog[0].link} className={styles} />
        <CatalogItem image={catalog[1].img} imageWebp={catalog[1].imgWebp} text={catalog[1].text} textButton={catalog[1].btn} link={catalog[1].link} className={styles} />
        <CatalogItem image={catalog[2].img} imageWebp={catalog[2].imgWebp} text={catalog[2].text} textButton={catalog[2].btn} link={catalog[2].link} className={styles} />
        <CatalogItem image={catalog[3].img} imageWebp={catalog[3].imgWebp} text={catalog[3].text} textButton={catalog[3].btn} link={catalog[3].link} className={styles} />
      </SlickSlider>
    </div>

  )
}
