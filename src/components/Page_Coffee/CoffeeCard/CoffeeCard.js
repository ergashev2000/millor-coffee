import React, { useContext, useState, useRef, useEffect } from 'react';
import styles from './CoffeeCard.module.scss';
import { MillorContext } from './../../Context';
import { discountItemPics } from '../../ImagesDB.js';
import CoffeeCardTablet from './CoffeeCardTablet';
import { isWebpSupported } from 'react-image-webp/dist/utils';


export default function CoffeeCard() {

  const { openOneProduct, addOneCard, removeOneCard, addProduct } = useContext(MillorContext);
  let pack = useRef();
  const [summ, setSumm] = useState(null);
  const [box, setBox] = useState(null);

  const handleChange = (e) => {
    pack = e.target.value;
    setBox(pack);
    setSumm(Math.round(pack * openOneProduct.price));
  }

  useEffect(() => {
    setSumm(Math.round(pack.current.value * openOneProduct.price));
    setBox(pack);
  }, []);

  return (
    <>
      <section className={styles.coffeeCard}>
        <div className="container">
          <div className={styles.container}>
            <div className={styles.image}>
              {isWebpSupported()
                ? <img src={openOneProduct.imageWebp} alt={openOneProduct.title} />
                : <img src={openOneProduct.image} alt={openOneProduct.title} />}
            </div>
            <div className={styles.contant}>
              <div className={styles.coffeeBeans} >
                {isWebpSupported()
                  ? <img src={discountItemPics[3]} alt="coffee beans" />
                  : <img src={discountItemPics[2]} alt="coffee beans" />}
              </div>
              <div className={styles.wrapperTitle}>
                <div>
                  <h6 className={styles.title}>{openOneProduct.title}</h6>
                  <p className={styles.methodProcessing}>{openOneProduct.methodProcessing}, натуральная, смесь</p>
                </div>
                <div className={styles.special}>
                  {openOneProduct.special.map(i => <p key={Math.random() * 10}>{i}</p>)}
                </div>
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
              </div>
              <div className={styles.properties}>
                <div className={styles.acid}>
                  <p className={styles.acidText}>Кислинка</p>
                  <img className={styles.acidImg} src={`${discountItemPics[4]}`} alt="acid" />
                </div>
                <div className={styles.bitterness}>
                  <p className={styles.bitternessText}>Горчинка</p>
                  <img className={styles.bitternessImg} src={`${discountItemPics[4]}`} alt="bitterness" />
                </div>
                <div className={styles.saturation}>
                  <p className={styles.saturationText}>Насыщенность</p>
                  <img className={styles.saturationImg} src={`${discountItemPics[4]}`} alt="saturation" />
                </div>
              </div>
              <div>
                <form className={styles.formPackage}>
                  <label htmlFor='250' className={styles.packageLabel}>
                    <input ref={pack} onClick={(e) => handleChange(e)} value="250" id='250' className={styles.packageInput} type="radio" name='package'></input>
                    <span className={styles.customRadio}></span>
                    <p>250 г.</p>
                  </label>
                  <label htmlFor='1000' className={styles.packageLabel}>
                    <input onClick={(e) => handleChange(e)} value="1000" id='1000' className={styles.packageInput} type="radio" name='package'></input>
                    <span className={styles.customRadio}></span>
                    <p>1000 г.</p>
                  </label>
                </form>
              </div>
              <div className={styles.buttons}>
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
      </section>
      <CoffeeCardTablet />
    </>
  );
}



