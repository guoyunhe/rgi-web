import { Box, Checkbox, Container, FormControlLabel, Grid, Pagination } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useSWR from 'swr';
import Game from '../../types/models/Game';
import PaginatedResult from '../../types/PaginatedResult';
import GameCard from './GameCard';

export default function GameList() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [noBoxartImage, setNoBoxartImage] = useState(false);
  const { data } = useSWR<PaginatedResult<Game>>(
    `games?page=${page}${noBoxartImage ? '&noBoxartImage=1' : ''}`,
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
          control={<Checkbox checked={noBoxartImage} onChange={handleNoBoxartImageChange} />}
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
        page={page}
        count={data?.meta.lastPage}
        onChange={handlePageChange}
        sx={{ mt: 3 }}
      />
    </Container>
  );
}
