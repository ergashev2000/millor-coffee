import React, { useContext } from 'react';
import styles from './ContactsMain.module.scss';
import { MillorContext } from './../../Context';
import ContactShopsItem from './ContactShopsItem';
import { itemShopsContacts } from '../../TextsDB';



export default function ContactsMain() {
  const data = useContext(MillorContext);

  return (
    <section className={styles.contactsMain}>
      <div className="container">
        <div className={styles.container}>
          <div className={data.location.pathname === '/contacts' ? styles.aboutContacts : styles.aboutShops}>
            {data.location.pathname === '/contacts' &&
              <>
                <div className={styles.contacts}>
                  <h6 className={styles.titleContacts}>Связаться с нами:</h6>
                  <a className={styles.contactsPhone} href="tel:+74012375343" >+7 (401) 237 53 43</a>
                  <a className={styles.contactsMail} href="mailto:Import@kldrefine.com">Import@kldrefine.com</a>
                </div>
                <div className={styles.legalAddress}>
                  <h6 className={styles.titleLegalAddress}>Юридический адрес:</h6>
                  <p className={styles.legalAddressText}>Российская, Федерация, 238310, Калининградская область, Гурьевский район, поселок Васильково, улица Шатурская, дом 4А</p>
                </div>
                <div className={styles.warehouse}>
                  <h6 className={styles.titleWarehouse}>Адрес склада:</h6>
                  <p className={styles.warehouseText}>Московская область, Балашиха, Западная промзона, Шоссе энтузиастов 1</p>
                </div>
              </>
            }

            {data.location.pathname === '/shops' &&
              itemShopsContacts.map(item =>
                < ContactShopsItem key={Math.random() * 10}
                  styles={styles}
                  city={item.city}
                  address={item.address}
                />
              )
            }

          </div>
          <div className={styles.img}>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2303.28292220678!2d20.578661915344473!3d54.73982707712346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e315b38eec664d%3A0x8585846aae8995ce!2z0YPQuy4g0KjQsNGC0YPRgNGB0LrQsNGPLCA00JAsINCS0LDRgdC40LvRjNC60L7QstC-LCDQmtCw0LvQuNC90LjQvdCz0YDQsNC00YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0ZbRjywgMjM4MzI0!5e0!3m2!1suk!2sua!4v1672313895895!5m2!1suk!2sua">map</iframe>
          </div>
        </div>
      </div>
    </section>
  );
}



