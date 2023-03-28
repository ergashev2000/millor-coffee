import React, { useContext, useState, useRef, useEffect } from 'react';
import styles from './TeaCard.module.scss';
import { MillorContext } from './../../Context';
import { discountItemPics } from '../../ImagesDB.js';
import { isWebpSupported } from 'react-image-webp/dist/utils';


export default function TeaCard() {
  const { openOneProduct, addOneCard, removeOneCard, addProduct } = useContext(MillorContext);

  let pack = useRef();

  const [showText, setShowText] = useState(false);
  const [summ, setSumm] = useState(null);
  const [box, setBox] = useState(null);

  const changePack = (e) => {
    pack = e.target.value;
    setBox(pack);
    setSumm(Math.round(pack * openOneProduct.price));
  }

  useEffect(() => {
    setSumm(Math.round(pack.current.value * openOneProduct.price));
    setBox(pack);
  }, []);

  return (
    <section className={styles.teaCard}>
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
              <form onChange={(e) => changePack(e)} className={styles.formPackage}>
                <label htmlFor='100' className={styles.packageLabel}>
                  <input value="100" id='100' className={styles.packageInput} type="radio" name='package'></input>
                  <span className={styles.customRadio}></span>
                  <p>100 г.</p>
                </label>
                <label htmlFor='150' className={styles.packageLabel}>
                  <input value="150" id='150' className={styles.packageInput} type="radio" name='package'></input>
                  <span className={styles.customRadio}></span>
                  <p>150 г.</p>
                </label>
                <label htmlFor='165' className={styles.packageLabel}>
                  <input value="165" id='165' className={styles.packageInput} type="radio" name='package'></input>
                  <span className={styles.customRadio}></span>
                  <p>165 г.</p>
                </label>
                <label htmlFor='200' className={styles.packageLabel}>
                  <input value="200" id='200' className={styles.packageInput} type="radio" name='package'></input>
                  <span className={styles.customRadio}></span>
                  <p>200 г.</p>
                </label>
              </form>
            </div>
            <div className={styles.buttons}>
              <div className={styles.wrapperSelect}>
                <select onChange={(e) => changePack(e)} ref={pack} name="target" className={styles.select}>
                  <option value="100">100 г.</option>
                  <option value="150">150 г.</option>
                  <option value="165">165 г.</option>
                  <option value="200">200 г.</option>
                </select>
              </div>
              <div className={styles.itemAmount}>
                <button onClick={() => removeOneCard()}>-</button>{openOneProduct.amount}<button onClick={() => addOneCard()}>+</button>
              </div>
              <div className={styles.buyBtn}>
                <button onClick={() => addProduct(summ, openOneProduct, box)}>Купить за {summ * openOneProduct.amount} ₽</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}



