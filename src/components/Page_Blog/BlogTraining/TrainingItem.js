import React from 'react';
import { isWebpSupported } from 'react-image-webp/dist/utils';

export default function TrainingItem({ img, imgWebp, title, styles, text }) {

  return (
    <div className={styles.item}>
      {title && <h6 className={styles.ItemTitle}>{title}</h6>}

      <div className={styles.laptop}>
        {text.map(item => <p key={Math.random() * 10} className={styles.text}>{item}</p>)}
      </div>

      <div className={styles.tablet}>
        {text.map((item, index) => index < 1 && <p key={Math.random() * 10} className={styles.text}>{item}</p>)}
      </div>

      <div className={styles.img}>
        {isWebpSupported()
          ? <img src={imgWebp} alt={title} />
          : <img src={img} alt={title} />}
      </div>

    </div>
  )
}
