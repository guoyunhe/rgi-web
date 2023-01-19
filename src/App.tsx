import { CssBaseline } from '@mui/material';
import axios from 'axios';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';
import AuthProvider from './components/auth/AuthProvider';
import LanguageEffect from './components/i18n/LanguageEffect';
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
