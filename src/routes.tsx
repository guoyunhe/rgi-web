import { RouteObject } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import AppLayout from './layouts/app';
import ActivitiesPage from './pages/activities';
import GameDetail from './pages/game-detail';
import GameList from './pages/game-list';
import Login from './pages/login';
import NotFound from './pages/not-found';
import Register from './pages/register';
const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <QueryParamProvider adapter={ReactRouter6Adapter} options={{ enableBatching: true }}>
        <AppLayout />
      </QueryParamProvider>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <GameList />,
      },
      {
        path: '/games/:gameId',
        element: <GameDetail />,
      },
      {
        path: '/activities',
        element: <ActivitiesPage />,
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
