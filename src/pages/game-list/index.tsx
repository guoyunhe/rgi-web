import { Container, Grid } from '@mui/material';
import useSWR from 'swr';
import Game from '../../types/models/Game';
import PaginatedResult from '../../types/PaginatedResult';
import GameCard from './GameCard';

export default function GameList() {
  const { data, error } = useSWR<PaginatedResult<Game>>('games?hasBoxart=1', { refreshInterval: 0 });

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
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
    </Container>
  );
}
