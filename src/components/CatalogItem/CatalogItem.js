import React, { useContext } from 'react';
import styles from './CatalogItem.module.scss';
import { Link } from 'react-router-dom';
import { MillorContext } from './../Context';
import '../Catalog/CatalogSlider.scss';
import { isWebpSupported } from 'react-image-webp/dist/utils';


export default function CatalogItem({ image, imageWebp, text, textButton, link, className }) {
  const data = useContext(MillorContext);

  return (
    <div className={className ? styles.sliderWrapper : styles.item}>
      {isWebpSupported()
        ? <img className={styles.image} src={imageWebp} alt={text} />
        : <img className={styles.image} src={image} alt={text} />}
      <p className={styles.text}>{text}</p>
      <button className={className ? 'btn' : styles.btn}><Link to={data.location.pathname === '/catalog' ? link : `/catalog/${link}`}>{textButton}</Link></button>
    </div>
  );
}
