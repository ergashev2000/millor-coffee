import React from 'react'
import CoffeeReviews from '../components/Page_Coffee/CoffeeReviews/CoffeeReviews'
import TeaSubscription from '../components/Page_Tea/TeaSubscription/TeaSubscription'
import WendingCard from '../components/Page_Wending/WendingCard/WendingCard';
import TeaNav from './../components/Page_Tea/TeaNav/TeaNav';
import WendingPath from './../components/Page_Wending/WendingPath/WendingPath';
import TeaPrepare from './../components/Page_Tea/TeaPrepare/TeaPrepare';
import WendingDescription from '../components/Page_Wending/WendingDescription/WendingDescription';

export default function Wending() {
  return (
    <article className='wending'>
      <WendingPath />
      <WendingCard />
      <TeaNav />
      <WendingDescription />
      <TeaPrepare />
      <CoffeeReviews />
      <TeaSubscription />
    </article>
  )
}
