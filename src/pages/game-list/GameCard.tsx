import { Box, Card, CardContent, CardMedia, Chip, colors, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Game from '../../types/models/Game';

export interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Card
      component={Link}
      to={'/games/' + game.id}
      sx={{ display: 'flex', height: 200, textDecoration: 'none' }}
    >
      <CardMedia
        component="img"
        height={game.boxartImage?.height}
        width={game.boxartImage?.width}
        image={game.boxartImage?.url}
        alt={game.boxartImage ? game.name : 'No Boxart Image'}
        sx={{
          width: 200,
          height: 200,
          backgroundColor: colors.grey[100],
          color: colors.grey[500],
          flex: '0 0 200px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography>{game.name}</Typography>
        <Typography sx={{ flex: '1 1 auto' }}></Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Chip label={game.platform} color="secondary" />
          <Chip label={game.serial} variant="outlined" />
        </Box>
      </CardContent>
    </Card>
  );
}
