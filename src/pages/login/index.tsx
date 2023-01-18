import { ArrowRightAlt } from '@mui/icons-material';
import {
  Alert,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  TextField,
} from '@mui/material';
import axios from 'axios';
import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../contexts/auth/useAuth';
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
          <TextField
            type="email"
            name="email"
            label={t('Email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            size="small"
            fullWidth
            sx={{ mb: 3 }}
          />
          <TextField
            type="password"
            name="password"
            label={t('Password')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            size="small"
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
