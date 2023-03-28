import { Routes, Route } from 'react-router-dom';

import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import Basket from './pages/Basket';
import Home from './pages/Home';
import CoffeeCatalog from './pages/CoffeeCatalog';
import TeaCatalog from './pages/TeaCatalog';
import Layout from './components/Layout';
import WendingProducts from './pages/WendingProducts';
import HealthyDiet from './pages/HealthyDiet';
import CatalogPage from './pages/CatalogPage';
import Coffee from './pages/Coffee';
import Tea from './pages/Tea';
import HealthyEating from './pages/HealthyEating';
import Wending from './pages/Wending';



function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />

          <Route path='catalog/*' element={<CatalogPage />}>
            <Route path='coffee_catalog/*' element={<CoffeeCatalog />}>
              <Route path='coffee' element={<Coffee />} />
            </Route>

            <Route path='tea_catalog/*' element={<TeaCatalog />}>
              <Route path='tea' element={<Tea />} />
            </Route>

            <Route path='wending_products/*' element={<WendingProducts />}>
              <Route path='wending' element={<Wending />} />
            </Route>

            <Route path='healthy_diet/*' element={<HealthyDiet />}>
              <Route path='healthy_eating' element={<HealthyEating />} />
            </Route>
          </Route>
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:id' element={<Blog />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='shops' element={<Contacts />} />
          <Route path='basket' element={<Basket />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
