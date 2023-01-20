import { Box, Checkbox, Container, FormControlLabel, Pagination } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useSWR from 'swr';
import Activity from '../../types/models/Activity';
import PaginatedResult from '../../types/PaginatedResult';
import ActivityRow from './ActivityRow';

export default function ActivitiesPage() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [noBoxartImage, setNoBoxartImage] = useState(false);
  const { data } = useSWR<PaginatedResult<Activity>>(`/activities?page=${page}`, {
    refreshInterval: 0,
  });

  const handlePageChange = (e: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleNoBoxartImageChange = (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setNoBoxartImage(checked);
    setPage(1);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Box>
        <FormControlLabel
          control={<Checkbox checked={noBoxartImage} onChange={handleNoBoxartImageChange} />}
          label={t('No boxart image')}
        />
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
