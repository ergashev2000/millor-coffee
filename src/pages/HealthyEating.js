import React from 'react'
import CoffeeReviews from '../components/Page_Coffee/CoffeeReviews/CoffeeReviews'
import TeaSubscription from '../components/Page_Tea/TeaSubscription/TeaSubscription'
import TeaNav from './../components/Page_Tea/TeaNav/TeaNav';
import HealthyEatingPath from './../components/Page_HealthyEating/HealthyEatingPath/HealthyEatingPath';
import HealthyEatingCard from './../components/Page_HealthyEating/HealthyEatingCard/HealthyEatingCard';
import TeaPrepare from '../components/Page_Tea/TeaPrepare/TeaPrepare';
import HealthyEatingDescription from '../components/Page_HealthyEating/HealthyEatingDescription/HealthyEatingDescription';

export default function HealthyEating() {
  return (
    <article className='healthyEating'>
      <HealthyEatingPath />
      <HealthyEatingCard />
      <TeaNav />
      <HealthyEatingDescription />
      <TeaPrepare />
      <CoffeeReviews />
      <TeaSubscription />
    </article>
  )
}
