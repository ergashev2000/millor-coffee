import React, { useContext, useRef, useState, useEffect } from 'react';
import styles from './HealthyDietItem.module.scss';
import { discountItemPics } from '../../ImagesDB';
import { MillorContext } from './../../Context';
import { Link } from 'react-router-dom';
import { isWebpSupported } from 'react-image-webp/dist/utils';


export default function HealthyDietItem({ productTitle, description, image, imageWebp, productPrice, item, sale, rating }) {
  const { addProduct, setOpenOneProduct } = useContext(MillorContext);
  const pack = useRef();
  const [summ, setSumm] = useState(null);

  const changePack = () => {
    setSumm(Math.round(pack.current.value * productPrice));
  }

  useEffect(() => {
    setSumm(Math.round(pack.current.value * productPrice));
  }, []);

  return (
    <section className={styles.healthyDietItem}>
      <div className={styles.container}>
        <form action="/" className={styles.form}>

          <div className={styles.rating}>
            {isWebpSupported()
              ? <img className={styles.stars} src={discountItemPics[6]} alt="stars" />
              : <img className={styles.stars} src={discountItemPics[5]} alt="stars" />}
            <p className={styles.reviews}>{rating}.0 <span>(32 отзыва)</span></p>
          </div>

          <div>
            <select onChange={() => changePack()} ref={pack} name="target" className={styles.select}>
              <option value="100">100 г.</option>
              <option value="150">150 г.</option>
              <option value="165">165 г.</option>
              <option value="200">200 г.</option>
              <option value="500">500 г.</option>
              <option value="1000">1000 г.</option>
            </select>
          </div>


        </form>
        <Link onClick={() => setOpenOneProduct(item)} to='healthy_eating'>
          <div className={sale ? `${styles.img} ${styles.sale}` : styles.img}>
            {isWebpSupported()
              ? <img src={imageWebp} alt="Packaging of barley powder" />
              : <img src={image} alt="Packaging of barley powder" />}
          </div>

          <div className={styles.wrapperText}>
            <h4 className={styles.title}>{productTitle}</h4>
            <p className={styles.text}>{description}</p>
          </div>
        </Link>
        <div className={styles.price}>
          <div className={sale ? `${styles.priceText} ${styles.sale}` : styles.priceText}>
            <p>{summ} ₽</p>
          </div>
          <div >
            <button className={styles.btn} onClick={(e) => addProduct(summ, item, pack)}>В корзину</button>
          </div>
        </div>

      </div>
    </section>
  );
}



