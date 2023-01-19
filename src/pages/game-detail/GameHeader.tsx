import { UploadFile } from '@mui/icons-material';
import { Box, Button, colors, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Game from '../../types/models/Game';

export interface GameHeaderProps {
  game: Game;
}

export default function GameHeader({ game }: GameHeaderProps) {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        backgroundImage: `url(${game.boxartImage?.url || '/logo.svg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundColor: colors.grey[300],
      }}
    >
      <Box sx={{ backdropFilter: 'blur(40px)' }}>
        <Container maxWidth="xl" sx={{ py: 3 }}>
          {game.boxartImage ? (
            <Box
              component="img"
              src={game.boxartImage.url}
              width={game.boxartImage.width}
              height={game.boxartImage.height}
              sx={{ width: 300, height: 'auto' }}
            />
          ) : (
            <Box
              sx={{
                width: 300,
                height: 300,
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>{t('No boxart image')}</Box>
              <Button startIcon={<UploadFile />}>{t('Upload')}</Button>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
}
