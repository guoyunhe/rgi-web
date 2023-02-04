import { Box } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import Game from '../../types/models/Game';
import GameGallery from './GameGallery';
import GameHeader from './GameHeader';

export default function GameDetail() {
  const { gameId } = useParams();
  const { data: game, mutate } = useSWR<Game>(`/games/${gameId}`);

  const updateGame = (data: Partial<Game>) => {
    axios.put<Game>('/games/' + gameId, data).then((res) => {
      mutate(res.data);
    });
  };

  if (!game) return null;

  return (
    <Box>
      <GameHeader game={game} updateGame={updateGame} />
      <GameGallery game={game} updateGame={updateGame} />
    </Box>
  );
}
