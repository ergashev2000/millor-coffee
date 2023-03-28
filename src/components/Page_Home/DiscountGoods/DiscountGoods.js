import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DiscountGoods.module.scss';
import bg from '../../../images/Discount Goods/bg.png';
import SlickSlider from 'react-slick';
import './Slider.scss';
import DiscountItem from '../DiscountItem/DiscountItem';
import { allProducts } from './../../TextsDB';


export default function DiscountGoods() {
  const productsDiscount = allProducts.filter(i => i.sale === true);


  const settings = {
    className: 'discount-slider',
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    responsive: [
      {
        breakpoint: 1095,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 935,
        settings: {
          arrows: false,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 450,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      },
    ]
  };

  return (
    <section className={styles.discountGoods}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles['wrapper_img']}>
            <img className={styles.img} src={bg} alt="coffee" />
          </div>
          <h3 className={styles.title}>Товары со скидкой</h3>
          <div className={styles.wrapperText}>
            <p className={styles.text}>Наша компания предлагает покупать товар со скидкой не только в дни распродаж
              или в течение действия ограниченных предложений, но и пользоваться скидками постоянно!</p>
          </div>
          <div className={styles.wrapperItems}>
            <div className={styles.items}>
              <SlickSlider {...settings}>
                {productsDiscount.map(i =>
                  <DiscountItem key={Math.random() * 10}
                    sale={i.sale}
                    special={i.special}
                    productTitle={i.title}
                    description={i.description}
                    image={i.image}
                    imageWebp={i.imageWebp}
                    productPrice={i.price}
                    item={i}
                    noLink={true}
                  />)}
              </SlickSlider>
            </div>
          </div>
          <div className={styles.wrapperLink}>
            <Link className={styles.link} to="#">Смотреть все</Link>
          </div>
        </div>
      </div>
    </section>
  );
}



