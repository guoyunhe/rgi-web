import { Card, CardContent, CardMedia, colors, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Game from '../../types/models/Game';

export interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const boxart = game.images?.find((img) => img.category === 'boxart');
  return (
    <Card
      component={Link}
      to={'/games/' + game.id}
      sx={{ display: 'flex', height: 200, textDecoration: 'none' }}
    >
      <CardMedia
        component="img"
        height={boxart?.height}
        width={boxart?.width}
        image={boxart?.url}
        alt={boxart ? game.name : 'No Boxart Image'}
        sx={{
          width: 'auto',
          height: 200,
          backgroundColor: colors.grey[100],
          color: colors.grey[500],
          flex: '0 0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography>{game.displayName}</Typography>
        <Typography sx={{ flex: '1 1 auto' }}></Typography>
      </CardContent>
    </Card>
  );
}
