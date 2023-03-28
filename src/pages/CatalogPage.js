import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import Catalog from '../components/Catalog/Catalog';
import Subscription from './../components/Subscription/Subscription';
import { MillorContext } from './../components/Context';

export default function CatalogPage() {
  const { location } = useContext(MillorContext);

  return (
    <>
      {
        location.pathname === "/catalog"
          ?
          <article className='catalog'>
            <Catalog />
            <Subscription />
          </article>
          :
          <Outlet />
      }
    </>
  )
}
