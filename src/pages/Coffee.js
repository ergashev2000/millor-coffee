import React from 'react'
import CoffeeSubscription from './../components/Page_Coffee/CoffeeSubscription/CoffeeSubscription';
import CoffeeCard from './../components/Page_Coffee/CoffeeCard/CoffeeCard';
import CoffeePath from './../components/Page_Coffee/CoffeePath/CoffeePath';
import CoffeeNav from '../components/Page_Coffee/CoffeeNav/CoffeeNav';
import CoffeeCharacteristics from '../components/Page_Coffee/CoffeeCharacteristics/CoffeeCharacteristics';
import CoffeeRange from '../components/Page_Coffee/CoffeeRange/CoffeeRange';
import CoffeeAdditionally from '../components/Page_Coffee/CoffeeAdditionally/CoffeeAdditionally';
import CoffeeReviews from '../components/Page_Coffee/CoffeeReviews/CoffeeReviews';

export default function Coffee() {
  return (
    <article className='coffee'>
      <CoffeePath />
      <CoffeeCard />
      <CoffeeNav />
      <CoffeeCharacteristics />
      <CoffeeRange />
      <CoffeeAdditionally />
      <CoffeeReviews />
      <CoffeeSubscription />
    </article>
  )
}
