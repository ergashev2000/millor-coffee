import React from 'react';
import styles from './ContactsHeader.module.scss';
import { Link, NavLink } from 'react-router-dom';



export default function ContactsHeader() {
  const setActive = ({ isActive }) => isActive ? 'active-contacts' : '';


  return (
    <section className={styles.contactsHeader}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.navigationLinks}>
            <ul>
              <li className={styles.navigationLink}><Link to='/'>Главная</Link></li>
              <li className={styles.navigationLink}>Контакты</li>
            </ul>
            <div className={styles.navigationItems}>
              <button className={styles.navigationItem}><NavLink className={setActive} to='/contacts'>Контакты</NavLink></button>
              <button className={styles.navigationItem}><NavLink className={setActive} to="/shops">Наши магазины</NavLink></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



