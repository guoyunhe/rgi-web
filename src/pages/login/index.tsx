import { ArrowRightAlt } from '@mui/icons-material';
import {
  Alert,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  FormLabel,
  OutlinedInput,
} from '@mui/material';
import axios from 'axios';
import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../components/auth/useAuth';
import AuthStatus from '../../types/enums/AuthStatus';

export default function Login() {
  const { t } = useTranslation();
  const location = useLocation();
  const { status, setStatus, setUser, setToken } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('/login', { email, password })
      .then((res) => {
        const { token, user } = res.data;
        setStatus(AuthStatus.LoggedIn);
        setUser(user);
        setToken(token.token);
        setErrorMessage('');
      })
      .catch((err) => {
        setErrorMessage(err.response?.data || 'Network error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (status === AuthStatus.LoggedIn) {
    return <Navigate to={location.state?.from?.pathname || '/'} />;
  }

  return (
    <Container maxWidth="xs" sx={{ py: 5 }}>
      <Card>
        <CardHeader title={t('Login')} />
        <CardContent component="form" onSubmit={handleLogin}>
          {errorMessage && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {errorMessage}
            </Alert>
          )}
          <FormLabel>{t('Email')}</FormLabel>
          <OutlinedInput
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            sx={{ mb: 3 }}
          />
          <FormLabel>{t('Password')}</FormLabel>
          <OutlinedInput
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            sx={{ mb: 3 }}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            endIcon={loading ? <CircularProgress size={20} /> : <ArrowRightAlt />}
          >
            {t('Login')}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
