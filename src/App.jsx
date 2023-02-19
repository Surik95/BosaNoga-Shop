import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { RouterProvider, defer, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Main from './pages/Main';
import Contacts from './pages/Contacts';
import Error404 from './pages/Error404';
import Search from './components/catalog/Search';
import requestTopSales from './api/requestTopSales';
import CatalogPage from './pages/CatalogPage';
import ProductCar from './components/productCar/ProductCar';
import BasketPage from './pages/BasketPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Error404 />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'cart',
        element: <BasketPage />,
      },
      {
        path: '/',
        element: <Main />,
        loader: async () => {
          const hitsPromise = requestTopSales(
            `${process.env.REACT_APP_BOSANOGA_URL}top-sales`,
          );
          return defer({ hitsPromise });
        },
      },
      {
        path: 'catalog',
        element: <CatalogPage />,
        children: [
          {
            path: '',
            element: <Search />,
          },
        ],
      },
      {
        path: 'catalog/:id',
        element: <ProductCar />,
        loader: async ({ params }) => {
          const proDuctCartPromise = requestTopSales(
            `${process.env.REACT_APP_BOSANOGA_URL}items/${params.id}`,
          );
          return defer({ proDuctCartPromise });
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
