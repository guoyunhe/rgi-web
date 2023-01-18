import { RouteObject } from 'react-router-dom';
import AppLayout from './layouts/app';
import GameList from './pages/game-list';
import Login from './pages/login';
import NotFound from './pages/not-found';
import Register from './pages/register';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <GameList />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
];

export default routes;
