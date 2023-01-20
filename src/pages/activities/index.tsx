import {
  Box,
  Container,
  FormControl,
  FormLabel,
  MenuItem,
  OutlinedInput,
  Pagination,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useSWR from 'swr';
import Activity from '../../types/models/Activity';
import PaginatedResult from '../../types/PaginatedResult';
import ActivityRow from './ActivityRow';

export default function ActivitiesPage() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [type, setType] = useState('');
  const [userId, setUserId] = useState('');
  const { data } = useSWR<PaginatedResult<Activity>>(`/activities?page=${page}&type=${type}`, {
    refreshInterval: 0,
  });

  const handlePageChange = (e: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleTypeChange = (e: SelectChangeEvent<string>) => {
    setType(e.target.value);
    setPage(1);
  };

  const handleUserIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
    setPage(1);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <FormControl sx={{ flex: '1 1 20%' }}>
          <FormLabel>{t('Type')} </FormLabel>
          <Select value={type} onChange={handleTypeChange} size="small" sx={{ width: '100%' }}>
            <MenuItem value="system">{t('System')}</MenuItem>
            <MenuItem value="admin">{t('Admin')}</MenuItem>
            <MenuItem value="user">{t('User')}</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ flex: '1 1 20%' }}>
          <FormLabel>{t('User ID')} </FormLabel>
          <OutlinedInput
            value={userId}
            onChange={handleUserIdChange}
            size="small"
            sx={{ width: '100%' }}
          />
        </FormControl>
        <Box sx={{ flex: '1 1 100%' }} />
      </Box>
      {data?.data.map((game) => {
        return <ActivityRow key={game.id} activity={game} />;
      })}
      <Pagination
        page={page}
        count={data?.meta.lastPage}
        onChange={handlePageChange}
        sx={{ mt: 3 }}
      />
    </Container>
  );
}
