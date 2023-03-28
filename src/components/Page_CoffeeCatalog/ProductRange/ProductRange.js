import React, { useContext } from 'react';
import styles from './ProductRange.module.scss';
import { productRangeIcons, productRangePic } from '../../ImagesDB';
import RangeItem from './RangeItem';
import RangeIcon from './RangeIcon';
import { Link } from 'react-router-dom';
import { MillorContext } from './../../Context';




export default function ProductRange() {

  const { coffee, fragmentationUniqueValues } = useContext(MillorContext);

  //получаю данные о географии
  const geography = fragmentationUniqueValues(coffee, 'geography');

  //получаю данные о кислинке и способе обработки
  const acid = fragmentationUniqueValues(coffee, 'acid');
  const methodProcessing = fragmentationUniqueValues(coffee, 'methodProcessing');

  //получаю данные о специальных сортировках
  const special = fragmentationUniqueValues(coffee, 'special');

  // console.log(special);

  //получаю данные о видах кофе
  const typeCoffee = fragmentationUniqueValues(coffee, 'typeCoffee');

  return (
    <section className={styles.productRange}>
      <div className="container">
        <div className={styles.container}>
          <ul className={styles.navigation}>
            <li className={styles.navigationItem}><Link to='/'>Главная</Link></li>
            <li className={styles.navigationItem}><Link to='/catalog'>Каталог товаров</Link></li>
            <li className={styles.navigationItem}>Свежеобжаренный кофе</li>
          </ul>
          <h4 className={styles.title}>Свежеобжаренный кофе</h4>
          <div className={styles.img}></div>
          <div className={styles.range}>
            <div className={styles.rangeIcons}>
              <h5 className={styles.iconsTitle}>Степень обжарки</h5>
              <form name='range'>
                <ul className={styles.iconsList}>

                  {productRangePic.map(item =>
                    <RangeItem
                      key={Math.random() * 100}
                      img={item.img}
                      imgWebp={item.imgWebp}
                      styles={styles}
                      name='range' />
                  )}

                </ul>
              </form>
            </div>
            <div className={styles.rangeAbout}>
              <div>
                <h6 className={styles.aboutTitle}>География</h6>
                <form name='geography'>
                  <ul>
                    {geography.map(item =>
                      <RangeItem
                        key={Math.random() * 100}
                        text={item}
                        styles={styles}
                        name='geography' />)}
                  </ul>
                </form>
              </div>
              <div>
                <h6 className={styles.aboutTitle}>Кислинка</h6>
                <form name='acid'>
                  <ul>
                    {acid.map(item =>
                      <RangeItem
                        key={Math.random() * 100}
                        text={item}
                        styles={styles}
                        name='acid' />)}
                  </ul>
                </form>
                <h6 className={styles.aboutTitle}>Способ обработки</h6>
                <form name='methodProcessing'>
                  <ul>
                    {methodProcessing.map(item =>
                      <RangeItem
                        key={Math.random() * 100}
                        text={item}
                        styles={styles}
                        name='methodProcessing' />)}
                  </ul>
                </form>
              </div>
              <div>
                <h6 className={styles.aboutTitle}>Особые</h6>
                <form name='special'>
                  <ul>
                    {special.map(item =>
                      <RangeItem
                        key={Math.random() * 100}
                        text={item}
                        styles={styles}
                        name='special' />)}
                  </ul>
                </form>
              </div>
              <div>
                <h6 className={styles.aboutTitle}>Вид кофе</h6>
                <form name='typeCoffee'>
                  <ul>
                    {typeCoffee.map(item =>
                      <RangeItem
                        key={Math.random() * 100}
                        text={item}
                        styles={styles}
                        name='typeCoffee' />)}
                  </ul>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.icons}>
            <ul className={styles.items}>
              {productRangeIcons.map(item =>
                <RangeIcon key={Math.random() * 100} img={item.img} text={item.text} styles={styles} item={item} />
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}



