import { Box, Checkbox, Container, FormControlLabel, Grid, Pagination } from '@mui/material';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import useSWR from 'swr';
import { BooleanParam, NumberParam, useQueryParam } from 'use-query-params';
import Game from '../../types/models/Game';
import PaginatedResult from '../../types/PaginatedResult';
import GameCard from './GameCard';

export default function GameList() {
  const { t } = useTranslation();
  const [page, setPage] = useQueryParam('page', NumberParam);
  const [noBoxartImage, setNoBoxartImage] = useQueryParam('noBoxartImage', BooleanParam);
  const { data } = useSWR<PaginatedResult<Game>>(
    `games?page=${page || 1}&noBoxartImage=${noBoxartImage ? 1 : 0}`,
    {
      refreshInterval: 0,
    }
  );

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
          control={
            <Checkbox checked={noBoxartImage || false} onChange={handleNoBoxartImageChange} />
          }
          label={t('No boxart image')}
        />
      </Box>
      {data && (
        <Grid container spacing={3}>
          {data.data.map((game) => {
            return (
              <Grid item xs={12} md={6} xl={4} key={game.id}>
                <GameCard game={game} />
              </Grid>
            );
          })}
        </Grid>
      )}
      <Pagination
        page={page || 1}
        count={data?.meta.lastPage}
        onChange={handlePageChange}
        sx={{ mt: 3 }}
      />
    </Container>
  );
}
