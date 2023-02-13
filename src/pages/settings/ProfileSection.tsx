import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormLabel,
  OutlinedInput,
} from '@mui/material';
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
        <Box sx={{ width: 128, height: 128, borderRadius: 999, background: '#f0f0f0' }} />
        <Box>
          <FormControl>
            <FormLabel>{t('Username')}</FormLabel>
            <Box>
              <OutlinedInput value={username} onChange={(e) => setUsername(e.target.value)} />
              <Button variant="outlined" sx={{ ml: 1 }}>
                {t('Save')}
              </Button>
            </Box>
          </FormControl>
        </Box>
      </CardContent>
    </Card>
  );
}
