import { UploadFile } from '@mui/icons-material';
import { Box, Button, colors, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ImageUploader from '../../components/images/ImageUploader';
import Game from '../../types/models/Game';

export interface GameHeaderProps {
  game: Game;
  updateGame: (data: Partial<Game>) => void;
}

export default function GameHeader({ game, updateGame }: GameHeaderProps) {
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
              <ImageUploader
                maxWidth={512}
                onSucceed={(image) => {
                  updateGame({ boxartImageId: image.id });
                }}
              >
                <Button startIcon={<UploadFile />}>{t('Upload')}</Button>
              </ImageUploader>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
}
