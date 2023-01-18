import { AppBar, Box, Button, Divider, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageMenu from '../../components/LanguageMenu';
import useAuth from '../../contexts/auth/useAuth';
import AuthStatus from '../../types/enums/AuthStatus';
import SearchBox from './SearchBox';

export default function Navbar() {
  const { t } = useTranslation();
  const { status, setStatus, setUser, setToken } = useAuth();

  const handleLogout = () => {
    setStatus(AuthStatus.LoggedOut);
    setUser(null);
    setToken('');
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
            {status === AuthStatus.LoggedIn ? (
              <div>
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
    </>
  );
}
