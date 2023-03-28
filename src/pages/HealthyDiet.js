import React, { useContext } from 'react';
import HealthyRange from './../components/Page_HealthyDiet/HealthyRange/HealthyRange';
import Production from './../components/Production/Production';
import { Outlet } from 'react-router';
import CoffeeCatalogMain from './../components/Page_CoffeeCatalog/CoffeeCatalogMain/CoffeeCatalogMain';
import { MillorContext } from './../components/Context';


export default function HealthyDiet() {

  const { itemsHealthyDiet, location } = useContext(MillorContext);

  return (
    <>
      {
        location.pathname === "/catalog/healthy_diet"
          ?
          <article className="healthyDiet">
            <HealthyRange />
            <Production arr={itemsHealthyDiet} key={Math.random() * 100} link='healthy_eating' />
            <CoffeeCatalogMain />
          </article>
          :
          <Outlet />
      }
    </>
  );
}



