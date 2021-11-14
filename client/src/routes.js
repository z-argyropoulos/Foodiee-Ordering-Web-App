import { useRoutes } from 'react-router';
import Home from './pages/Home';

const Router = () => {
  return useRoutes([
    {
      path: '/stores',
      element: <></>,
      children: [{ path: ':id', element: <></> }],
    },
    {
      path: '/',
      element: <Home />,
    },
  ]);
};

export default Router;
