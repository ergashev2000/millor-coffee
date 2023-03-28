import React from 'react';
import styles from './Review.module.scss';
import { isWebpSupported } from 'react-image-webp/dist/utils';


export default function Review({ title, data, avtor, city, rating, ratingWebp, text, ava, avaWebp }) {
  return (
    <section id='reviews' className={styles.review}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.contant}>
            <h5 className={styles.icon}>
              {isWebpSupported()
                ? <img src="../../images/Coffee/“”.webp" alt="quotes" />
                : <img src="../../images/Coffee/“”.png" alt="quotes" />}
            </h5>
            <div className={styles.wrapperTitle}>
              <h6 className={styles.title}>{title}</h6>
              <p className={styles.data}>{data}</p>
            </div>
            <div className={styles.raiting}>
              {isWebpSupported()
                ? <img src={ratingWebp} alt="stars" />
                : <img src={rating} alt="stars" />}
            </div>
            <div className={styles.wrapperText}>
              <p className={styles.text}>{text}</p>
            </div>
          </div>
          <div className={styles.client}>
            <div className={styles.photo}>
              {isWebpSupported()
                ? <img src={avaWebp} alt="users avatar" />
                : <img src={ava} alt="users avatar" />}
            </div>
            <div className={styles.about}>
              <h6 className={styles.name}>{avtor}</h6>
              <p className={styles.city}>{city}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



