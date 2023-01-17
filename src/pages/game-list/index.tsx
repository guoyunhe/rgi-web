import { Grid } from '@mui/material';
import useSWR from 'swr';
import Game from '../../types/models/Game';
import PaginatedResult from '../../types/PaginatedResult';
import GameCard from './GameCard';

export default function GameList() {
  const { data, error } = useSWR<PaginatedResult<Game>>('games?hasBoxart=1', { refreshInterval: 0 });

  return (
    <div>
      {data && (
        <Grid container spacing={3}>
          {data.data.map((game) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={game.id}>
                <GameCard game={game} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
}
