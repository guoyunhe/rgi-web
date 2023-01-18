import { CssBaseline } from '@mui/material';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';
import LanguageEffect from './components/LanguageEffect';
import AuthProvider from './contexts/auth/AuthProvider';
import routes from './routes';

const router = createBrowserRouter(routes);

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function App() {
  return (
    <AuthProvider>
      <SWRConfig value={{ fetcher }}>
        <CssBaseline>
          <RouterProvider router={router} />
          <LanguageEffect />
        </CssBaseline>
      </SWRConfig>
    </AuthProvider>
  );
}
