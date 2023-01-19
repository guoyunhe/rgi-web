import { AppBar, Box, Button, Divider, Snackbar, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import useAuth from '../../components/auth/useAuth';
import LanguageMenu from '../../components/LanguageMenu';
import AuthStatus from '../../types/enums/AuthStatus';
import SearchBox from './SearchBox';

export default function Navbar() {
  const { t } = useTranslation();
  const { setStatus, user, setUser, setToken } = useAuth();
  const [logoutError, setLogoutError] = useState('');

  const handleLogout = () => {
    axios
      .post('/logout')
      .then(() => {
        setStatus(AuthStatus.LoggedOut);
        setUser(null);
        setToken('');
      })
      .catch((err) => {
        setLogoutError(err.response?.message || t('Network error'));
      });
  };

  return (
    <>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <Link to="/" style={{ display: 'flex', textDecoration: 'none', color: 'inherit' }}>
            <Box
              component="img"
              src="/logo.svg"
              width={64}
              height={64}
              sx={{ height: 48, m: -1, mr: 0 }}
            />
            <Typography variant="h6" noWrap component="div">
              {import.meta.env.VITE_APP_NAME}
            </Typography>
          </Link>

          <SearchBox />

          <Box sx={{ display: 'flex' }}>
            <Button color="inherit" component={Link} to="/">
              {t('Games')}
            </Button>
            <Button color="inherit" component={Link} to="/titles">
              {t('Titles')}
            </Button>
            <Button color="inherit" component={Link} to="/series">
              {t('Series')}
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: 'flex' }}>
            <LanguageMenu />
            <Divider orientation="vertical" />
            {user ? (
              <div>
                <Button color="inherit" component={Link} to={'/users/' + user.id}>
                  {user.username}
                </Button>
                <Button color="inherit" component={Link} to="settings">
                  {t('Settings')}
                </Button>
                <Button color="inherit" onClick={handleLogout}>
                  {t('Logout')}
                </Button>
              </div>
            ) : (
              <div>
                <Button color="inherit" component={Link} to="/login">
                  {t('Login')}
                </Button>
                <Button color="inherit" component={Link} to="/register">
                  {t('Register')}
                </Button>
              </div>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Snackbar
        open={!!logoutError}
        autoHideDuration={3000}
        onClose={() => setLogoutError('')}
        message={logoutError}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{ mt: 8 }}
      />
    </>
  );
}
