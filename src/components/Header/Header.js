import React, { useContext } from 'react';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { icons } from '../ImagesDB';
import { MillorContext } from './../Context';
import RegistrationForm from './../RegistrationForm/RegistrationForm';
import OpenNav from './OpenNav';
import SearchTablet from './SearchTablet';
import Image from 'react-image-webp';




export default function Header() {
  const { openSearch, setOpenSearch, location, products, openRegistrationForm, setOpenRegistrationForm, openNav, setOpenNav, totalProducts } = useContext(MillorContext);

  const setActive = ({ isActive }) => isActive ? 'active-header' : '';
  const setActiveNav = ({ isActive }) => isActive ? 'active-nav' : '';
  
  return (
    <header className={styles.header}>
      <div className="container">
        {!openNav ?
          <>
            <div className={styles.container}>

              <span onClick={() => setOpenNav(true)} className={styles.mobileBtn}></span>

              <div className={styles.logo}>
                <Link to="/">
                  <Image src={require('../../images/logo.png')} webp={require('../../images/logo.webp')} alt="logo"/>
                </Link>
              </div>

              {!openSearch &&
                <nav className={styles.nav}>
                  <ul className={styles.navList}>
                    <li className={styles.navItem}>
                      <NavLink to="/catalog" className={setActive} >Каталог товаров</NavLink>
                    </li>
                    <li className={styles.navItem}>
                      <NavLink to="/blog" className={setActive}>Блог</NavLink>
                    </li>
                    <li className={styles.navItem}>
                      {location.pathname !== '/shops' && <NavLink to='/contacts' className={setActive}>Контакты</NavLink>}
                      {location.pathname === '/shops' && <NavLink to='/shops' className={setActive}>Контакты</NavLink>}
                    </li>
                  </ul>
                </nav>}

              {openSearch && <input className={styles.activeSearch} type="text" placeholder='Поиск по товарам' />}
              {openSearch && <SearchTablet />}

              <div className={styles.icons}>

                {!openSearch && <div className={styles.icon} onClick={() => setOpenSearch(true)}>{icons[0]}</div>}

                <div className={styles.icon}>
                  <NavLink className={setActiveNav} to="/basket">{icons[1]}</NavLink>
                  {products.length > 0 && <span className={styles.iconActive}>{totalProducts}</span>}
                </div>
                <div className={styles.icon} onClick={() => setOpenRegistrationForm(true)}>{icons[2]}
                  {/* <Link to='/' onClick={() => setOpenRegistrationForm(true)}>{icons[2]}</Link> */}
                </div>
              </div>
            </div>
          </>
          :
          <OpenNav />
        }
      </div>
      {openRegistrationForm && <RegistrationForm />}
    </ header>
  );
}
