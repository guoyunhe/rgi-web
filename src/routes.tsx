import { RouteObject } from 'react-router-dom';
import { RequireAuth } from './contexts/auth/RequireAuth';
import dashboard from './dashboard/routes';
import AppLayout from './layouts/app';
import NotFound from './not-found';
import GameList from './pages/game-list';
import Login from './pages/login';
import Register from './pages/register';
import TodosPage from './todos';

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

  {
    path: 'todos',
    element: (
      <RequireAuth>
        <TodosPage />
      </RequireAuth>
    ),
  },
  ...dashboard,
];

export default routes;
