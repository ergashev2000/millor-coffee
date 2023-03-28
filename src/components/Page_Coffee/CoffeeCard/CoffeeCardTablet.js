import React, { useContext, useState, useRef, useEffect } from 'react';
import styles from './CoffeeCard.module.scss';
import { MillorContext } from './../../Context';
import { discountItemPics } from '../../ImagesDB.js';
import { isWebpSupported } from 'react-image-webp/dist/utils';

export default function CoffeeCardTablet() {

  const { addOneCard, removeOneCard, addProduct, openOneProduct } = useContext(MillorContext);

  const pack = useRef();
  const [showText, setShowText] = useState(false);
  const [summ, setSumm] = useState(null);

  const changePack = () => {
    setSumm(Math.round(pack.current.value * openOneProduct.price));
  }

  useEffect(() => {
    setSumm(Math.round(pack.current.value * openOneProduct.price));
  }, []);

  return (
    <section className={styles.coffeeCardTablet}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.wrapperAbout}>
            <div>
              <div className={styles.reviews}>
                <div className={styles.reviewsStars}>
                  {isWebpSupported()
                    ? <img src={discountItemPics[6]} alt="stars" />
                    : <img src={discountItemPics[5]} alt="stars" />}
                </div>
                <p className={styles.reviewsText}>{openOneProduct.rating}.0 <span>(32 отзыва)</span></p>
              </div>
              <div className={styles.special}>
                {openOneProduct.special.map(i => <p key={Math.random() * 10}>{i}</p>)}
              </div>
              <div className={styles.coffeeBeans} >
                {isWebpSupported()
                  ? <img src={discountItemPics[3]} alt="coffee beans" />
                  : <img src={discountItemPics[2]} alt="coffee beans" />}
              </div>
            </div>
            <div className={styles.image}>
              {isWebpSupported()
                ? <img src={openOneProduct.imageWebp} alt={openOneProduct.title} />
                : <img src={openOneProduct.image} alt={openOneProduct.title} />}
            </div>
          </div>
          <div className={styles.wrapperTitle}>
            <div>
              <h6 className={styles.title}>{openOneProduct.title}</h6>
              <p className={styles.methodProcessing}>{openOneProduct.methodProcessing}, натуральная, смесь</p>
            </div>
            <div
              className={styles.contantAbout}>
              <p className={!showText ? `${styles.aboutText}` : `${styles.aboutText} ${styles.show}`}>Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой склад и представительство в Москве. Завод работает на рынке свежеобжаренного кофе и растворимой продукции более 15 лет. Завод имеет немецкое оборудование марки Probat по обжарке кофе и итальянские агломераторы для производства растворимой продукции.</p>
            </div>
            <span className={!showText ? `${styles.aboutLink}` : `${styles.aboutLink} ${styles.show}`} onClick={() => setShowText(!showText)}>{!showText ? 'Читать полностью' : 'Скрыть'}</span>
          </div>
          <div className={styles.properties}>
            <div className={styles.acid}>
              <p className={styles.acidText}>Кислинка</p>
              <img className={styles.acidImg} src={discountItemPics[4]} alt="acid" />
            </div>
            <div className={styles.bitterness}>
              <p className={styles.bitternessText}>Горчинка</p>
              <img className={styles.bitternessImg} src={discountItemPics[4]} alt="bitterness" />
            </div>
            <div className={styles.saturation}>
              <p className={styles.saturationText}>Насыщенность</p>
              <img className={styles.saturationImg} src={discountItemPics[4]} alt="saturation" />
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.selectAmount}>
              <div className={styles.wrapperSelect}>
                <select onChange={changePack} ref={pack} name="target" className={styles.select}>
                  <option value="250">250 г.</option>
                  <option value="1000">1000 г.</option>
                </select>
              </div>
              <div className={styles.itemAmount}>
                <button onClick={() => removeOneCard(openOneProduct)}>-</button>{openOneProduct.amount}<button onClick={() => addOneCard(openOneProduct)}>+</button>
              </div>
            </div>
            <div className={styles.buyBtn}>
              <button onClick={() => addProduct(summ, openOneProduct, pack)}>Купить за {summ * openOneProduct.amount} ₽</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
