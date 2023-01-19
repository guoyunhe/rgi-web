import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import Game from '../../types/models/Game';
import GameHeader from './GameHeader';

export default function GameDetail() {
  const { gameId } = useParams();
  const { data } = useSWR<Game>(`/games/${gameId}`, {
    refreshInterval: 0,
  });
  if (!data) return null;
  return (
    <Box>
      <GameHeader game={data} />
    </Box>
  );
}
