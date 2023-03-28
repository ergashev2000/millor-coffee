import React from 'react';
import BasketHeader from '../components/Page_Basket/BasketHeader/BasketHeader';
import BasketProducts from '../components/Page_Basket/BasketProducts/BasketProducts';
import Subscription from './../components/Subscription/Subscription';
import BasketDelivery from './../components/Page_Basket/BasketDelivery/BasketDelivery';
import BasketPayment from '../components/Page_Basket/BasketPayment/BasketPayment';


export default function Basket() {
  return (
    <article className="basket">
      <BasketHeader />
      <BasketProducts />
      <BasketDelivery />
      <BasketPayment />
      <Subscription />
    </article>
  );
}



