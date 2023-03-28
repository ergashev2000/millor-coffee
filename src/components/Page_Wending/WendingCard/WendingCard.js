import React, { useContext, useState } from 'react';
import styles from './WendingCard.module.scss';
import { MillorContext } from './../../Context';
import { discountItemPics } from '../../ImagesDB.js';
import { isWebpSupported } from 'react-image-webp/dist/utils';

export default function WendingCard() {
  const { pack, openOneProduct, addOneCard, removeOneCard } = useContext(MillorContext);

  const [showText, setShowText] = useState(false);

  return (
    <section className={styles.wendingCard}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.reviewsTablet}>
            <div className={styles.reviewsStars}>
              {isWebpSupported()
                ? <img src={discountItemPics[6]} alt="stars" />
                : <img src={discountItemPics[5]} alt="stars" />}
            </div>
            <p className={styles.reviewsText}>{openOneProduct.rating}.0 <span>(32 отзыва)</span></p>
          </div>
          <div className={styles.image}>
            {isWebpSupported()
              ? <img src={openOneProduct.imageWebp} alt={openOneProduct.title} />
              : <img src={openOneProduct.image} alt={openOneProduct.title} />}
          </div>
          <div className={styles.contant}>
            <div className={styles.wrapperTitle}>
              <h6 className={styles.title}>{openOneProduct.title}</h6>
              {openOneProduct.description.map(i => <p key={Math.random() * 10} className={styles.text}>{i}</p>)}
            </div>
            <div className={styles.reviews}>
              <div className={styles.reviewsStars}>
                {isWebpSupported()
                  ? <img src={discountItemPics[6]} alt="stars" />
                  : <img src={discountItemPics[5]} alt="stars" />}
              </div>
              <p className={styles.reviewsText}>{openOneProduct.rating}.0 <span>(32 отзыва)</span></p>
            </div>
            <div className={styles.contantAbout}>
              <p className={styles.aboutText}>Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой склад и представительство в Москве. Завод работает на рынке свежеобжаренного кофе и растворимой продукции более 15 лет. Завод имеет немецкое оборудование марки Probat по обжарке кофе и итальянские агломераторы для производства растворимой продукции.</p>
              <p className={!showText ? `${styles.aboutTextTablet}` : `${styles.aboutTextTablet} ${styles.show}`}>Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой склад и представительство в Москве. Завод работает на рынке свежеобжаренного кофе и растворимой продукции более 15 лет. Завод имеет немецкое оборудование марки Probat по обжарке кофе и итальянские агломераторы для производства растворимой продукции.</p>
            </div>
            <span className={!showText ? `${styles.aboutLink}` : `${styles.aboutLink} ${styles.show}`} onClick={() => setShowText(!showText)}>{!showText ? 'Читать полностью' : 'Скрыть'}</span>

            <div className={styles.wrapperForm}>
              <form ref={pack} className={styles.formPackage}>
                <label htmlFor='10' className={styles.packageLabel}>
                  <input id='10' className={styles.packageInput} type="radio" name='package'></input>
                  <span className={styles.customRadio}></span>
                  <p>10 кг.</p>
                </label>
                <label htmlFor='18' className={styles.packageLabel}>
                  <input id='18' className={styles.packageInput} type="radio" name='package'></input>
                  <span className={styles.customRadio}></span>
                  <p>18 кг.</p>
                </label>
                <label htmlFor='25' className={styles.packageLabel}>
                  <input id='25' className={styles.packageInput} type="radio" name='package'></input>
                  <span className={styles.customRadio}></span>
                  <p>25 кг.</p>
                </label>
                <label htmlFor='30' className={styles.packageLabel}>
                  <input id='30' className={styles.packageInput} type="radio" name='package'></input>
                  <span className={styles.customRadio}></span>
                  <p>30 кг.</p>
                </label>
                <label htmlFor='33' className={styles.packageLabel}>
                  <input id='33' className={styles.packageInput} type="radio" name='package'></input>
                  <span className={styles.customRadio}></span>
                  <p>33 кг.</p>
                </label>
              </form>
            </div>
            <div className={styles.buttons}>
              <div className={styles.wrapperSelect}>
                <select ref={pack} name="target" className={styles.select}>
                  <option>10 кг.</option>
                  <option>18 кг.</option>
                  <option>25 кг.</option>
                  <option>30 кг.</option>
                  <option>33 кг.</option>
                </select>
              </div>
              <div className={styles.itemAmount}>
                <button onClick={() => removeOneCard()}>-</button>{openOneProduct.amount}<button onClick={() => addOneCard()}>+</button>
              </div>
              <div className={styles.buyBtn}>
                <button>Оставить заявку</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



