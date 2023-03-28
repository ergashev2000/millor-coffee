import React, { useContext } from 'react';
import Production from './../components/Production/Production';
import WendingRange from '../components/Page_WendingProducts/WendingRange/WendingRange';
import { Outlet } from 'react-router';
import CoffeeCatalogMain from './../components/Page_CoffeeCatalog/CoffeeCatalogMain/CoffeeCatalogMain';
import { MillorContext } from './../components/Context';


export default function WendingProducts() {

  const { location, itemsWendingProducts } = useContext(MillorContext);

  return (
    <>
      {
        location.pathname === "/catalog/wending_products"
          ?
          <article className="wendingProducts">
            <WendingRange />
            <Production arr={itemsWendingProducts} key={Math.random() * 100} link='wending' />
            <CoffeeCatalogMain />
          </article>
          :
          <Outlet />
      }
    </>
  );
}



