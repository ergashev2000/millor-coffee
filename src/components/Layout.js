import React, { useContext } from 'react';
import Header from './Header/Header.js';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import { MillorContext } from './Context.js';


export default function Layout() {

  const data = useContext(MillorContext);

  return (
    <>
      <Header />
      <main
        onClick={() => data.setOpenSearch(false)}
        className='main'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
