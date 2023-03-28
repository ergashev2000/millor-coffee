import React, { useContext } from 'react';
import styles from './FormTablet.module.scss';
import { MillorContext } from './../Context';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function RegistrationFormTablet() {

  const { setOpenRegistrationForm } = useContext(MillorContext);

  return (
    <motion.section
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.8 }}
      className={styles.formTablet}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.wrapperLogo}>
            <div className={styles.logo}></div>
            <span onClick={() => setOpenRegistrationForm(false)} className={styles.mobileBtnClose}></span>
          </div>
          <div className={styles.contant}>
            <h6 className={styles.title}>Регистрация</h6>
            <p className={styles.text}>Зарегистрируйтесь на сайте, чтобы первым получать скидки и узнавать акционные предложения!</p>
            <ul className={styles.registrationList}>
              <li className={styles.registrationItem}><input type="text" placeholder='Имя и Фамилия' /></li>
              <li className={styles.registrationItem}><input type="email" placeholder='Email' /></li>
              <li className={styles.registrationItem}><input type="tel" placeholder='Телефон' /></li>
              <li className={styles.registrationItem}><input className={styles.password} type="password" placeholder='Придумайте пароль' /></li>
            </ul>
            <button className={styles.btn}>Зарегистрироваться</button>
          </div>
          <div className={styles.registration}>
            <p>Уже есть аккаунт?</p>
            <Link to=''>Войти</Link>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
