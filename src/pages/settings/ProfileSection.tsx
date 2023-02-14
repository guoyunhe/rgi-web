import { Box, Button, Card, CardContent, CardHeader, TextField } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useAuth from '../../components/auth/useAuth';

export default function ProfileSection() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [username, setUsername] = useState(user?.username);
  return (
    <Card>
      <CardHeader title={t('Profile')} titleTypographyProps={{ lineHeight: 1 }} />
      <CardContent sx={{ display: 'flex', gap: 3 }}>
        <Box sx={{ width: 200, height: 200, borderRadius: 999, background: '#f0f0f0' }} />
        <Box sx={{ flex: '1 1 auto' }}>
          <Box sx={{ mb: 3 }}>
            <TextField
              label={t('Username')}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button variant="outlined" sx={{ ml: 1 }}>
              {t('Save')}
            </Button>
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              label={t('Email')}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button variant="outlined" sx={{ ml: 1 }}>
              {t('Save')}
            </Button>
          </Box>
          <Box>
            <TextField
              label={t('Description')}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              multiline
              rows={3}
              fullWidth
              sx={{ mb: 1 }}
            />
            <Button variant="outlined">{t('Save')}</Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
