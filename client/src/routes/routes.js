import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router';
import { PATH_PAGE } from './paths';

const LazyLoadComponent = (Component) => (props) => {
  return (
    <Suspense fallback={<>Loading</>}>
      <Component {...props} />
    </Suspense>
  );
};

const Router = () => {
  return useRoutes([
    {
      path: PATH_PAGE.stores,
      children: [
        { index: true, element: <StoresList /> },
        { path: 'store/:storeId', element: <Store /> },
      ],
    },
    {
      path: PATH_PAGE.checkout,
      element: <Checkout />,
    },
    {
      path: PATH_PAGE.root,
      element: <Home />,
    },
  ]);
};

// Lazy Load Components
const Home = LazyLoadComponent(lazy(() => import('../pages/Home')));
const Store = LazyLoadComponent(lazy(() => import('../pages/Store')));
const StoresList = LazyLoadComponent(
  lazy(() => import('../pages/StoresList'))
);
const Checkout = LazyLoadComponent(
  lazy(() => import('../pages/Checkout'))
);

export default Router;
