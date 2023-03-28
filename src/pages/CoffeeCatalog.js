import React, { useContext } from 'react';
import ProductRange from './../components/Page_CoffeeCatalog/ProductRange/ProductRange';
import { Outlet } from 'react-router';
import { MillorContext } from './../components/Context';
import CoffeeCatalogMain from './../components/Page_CoffeeCatalog/CoffeeCatalogMain/CoffeeCatalogMain';
import CoffeeCatalogDProducts from './../components/Page_CoffeeCatalog/CoffeeCatalogDProducts/CoffeeCatalogDProducts';


export default function CoffeeCatalog() {
  const { location } = useContext(MillorContext);

  return (
    <>
      {
        location.pathname === "/catalog/coffee_catalog"
          ?
          <article className='coffeeCatalog'>
            <ProductRange />
            <CoffeeCatalogDProducts />
            <CoffeeCatalogMain />
          </article>
          :
          <Outlet />
      }
    </>
  );
}

