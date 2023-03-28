import React from 'react'
import AboutWork from '../components/Page_Home/AboutWork/AboutWork';
import Catalog from '../components/Catalog/Catalog';
import Slider from '../components/Page_Home/Slider/Slider';
import Advantages from './../components/Page_Home/Advantages/Advantages';
import News from '../components/Page_Home/News/News';
import SocialNetworks from './../components/Page_Home/SocialNetworks/SocialNetworks';
import Subscription from './../components/Subscription/Subscription';
import DiscountGoods from './../components/Page_Home/DiscountGoods/DiscountGoods';

export default function Home() {
  return (
    <article>
      <Slider />
      <Catalog />
      <DiscountGoods />
      <Advantages />
      <AboutWork />
      <News />
      <SocialNetworks />
      <Subscription />
    </article>
  )
}
