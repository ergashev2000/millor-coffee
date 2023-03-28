import React, { useContext, useRef, useState, useEffect } from 'react';
import styles from './DiscountItem.module.scss';
import './discountItem.scss';
import { discountItemPics } from '../../ImagesDB';
import { MillorContext } from './../../Context';
import { Link } from 'react-router-dom';
import { isWebpSupported } from 'react-image-webp/dist/utils';


export default function DiscountItem({ sale, special, productTitle, description, image, imageWebp, productPrice, item, noLink }) {

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
    <div className={styles.discountItem}>
      <div className={styles.container}>
        <form action="/" className={sale ? styles.form : styles.formNoSale}>
          {!sale &&
            <div className={styles.noDiscount}>
              {special.map(item => <p key={Math.random() * 10}>{item}</p>)}
            </div>}
          <select onChange={() => changePack()} ref={pack} name="target" className={styles.select}>
            <option value='250'>250 г.</option>
            <option value='1000'>1000 г.</option>
          </select>
        </form>

        {sale &&
          <div className={styles.discount}>
            <p>Скидки</p>
            <div className={styles.wrapperDiscountImg}>
              {isWebpSupported()
                ? <img className={styles.discountImg} src={discountItemPics[8]} alt='icon percent' />
                : <img className={styles.discountImg} src={discountItemPics[7]} alt='icon percent' />}
            </div>
          </div>
        }
        <Link onClick={() => setOpenOneProduct(item)} className={styles.link} to={noLink ? '' : "coffee"} >
          <div className={item.product === 'coffee' ? `${styles.wrapper}` : `${styles.wrapperNoCoffee}`} >
            <div className={styles.img}>
              {isWebpSupported()
                ? <img src={imageWebp} alt="coffee" />
                : <img src={image} alt="coffee" />}
            </div>
            {item.product === 'coffee' &&
              <div className={styles.about}>
                {isWebpSupported()
                  ? <img className={styles.stars} src={discountItemPics[6]} alt="stars" />
                  : <img className={styles.stars} src={discountItemPics[5]} alt="stars" />}
                <p className={styles.reviews}>4.0 <span>(32 отзыва)</span></p>
                {isWebpSupported()
                  ? <img className={styles.coffeeBeans} src={discountItemPics[3]} alt="coffee beans" />
                  : <img className={styles.coffeeBeans} src={discountItemPics[2]} alt="coffee beans" />}
                <p className={styles.description}>Кислинка</p>
                <img className={styles.descriptionImg} src={discountItemPics[4]} alt="" />
                <p className={styles.description}>Горчинка</p>
                <img className={styles.descriptionImg} src={discountItemPics[4]} alt="" />
                <p className={styles.description}>Насыщенность</p>
                <img className={styles.descriptionImg} src={discountItemPics[4]} alt="" />
              </div>}
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
            <button className={styles.btn} onClick={() => addProduct(summ, item, pack)}>В корзину</button>
          </div>
        </div>

      </div>
    </ div>
  );
}



