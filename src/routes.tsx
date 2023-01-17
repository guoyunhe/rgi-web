import { RouteObject } from 'react-router-dom';
import { RequireAuth } from './auth/RequireAuth';
import dashboard from './dashboard/routes';
import Home from './home';
import AppLayout from './layouts/app';
import Login from './login';
import NotFound from './not-found';
import TodosPage from './todos';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
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
