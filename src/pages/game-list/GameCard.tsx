import { Box, Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import Game from '../../types/models/Game';

export interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Card sx={{ display: 'flex', height: 200 }}>
      <CardMedia
        component="img"
        height={game.boxartImage?.height}
        width={game.boxartImage?.width}
        image={game.boxartImage?.url}
        alt={game.name}
        sx={{ width: 200, height: 200 }}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography>{game.name}</Typography>
        <Typography sx={{ flex: '1 1 auto' }}></Typography>
        <Box>
          <Chip label={game.platform} />
          <Chip label={game.serial} variant="outlined" />
        </Box>
      </CardContent>
    </Card>
  );
}
