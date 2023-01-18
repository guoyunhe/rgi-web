import { ArrowRightAlt } from '@mui/icons-material';
import {
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

export default function Register() {
  const { t } = useTranslation();
  const location = useLocation();
  const { status, setStatus, setUser, setToken } = useAuth();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('/register', { email, username, password, passwordConfirm })
      .then((res) => {
        if (res.data) {
          const { token, user } = res.data;
          setStatus(AuthStatus.LoggedIn);
          setUser(user);
          setToken(token.token);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (status === AuthStatus.LoggedIn) {
    console.log(location.state?.from?.pathname);
    return <Navigate to={location.state?.from?.pathname || '/'} />;
  }

  return (
    <Container maxWidth="xs" sx={{ py: 5 }}>
      <Card>
        <CardHeader title={t('Register')} />
        <CardContent component="form" onSubmit={handleRegister}>
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
            name="username"
            label={t('Username')}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <TextField
            type="password"
            name="password"
            label={t('Password confirm')}
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
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
            {t('Register')}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
