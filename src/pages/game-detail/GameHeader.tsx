import { UploadFile } from '@mui/icons-material';
import { Box, Button, colors, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ImageUploader from '../../components/images/ImageUploader';
import Game from '../../types/models/Game';

export interface GameHeaderProps {
  game: Game;
  updateGame: (data: Partial<Game> & { addImageId?: number }) => void;
}

export default function GameHeader({ game, updateGame }: GameHeaderProps) {
  const { t } = useTranslation();
  const boxart = game.images?.find((img) => img.category === 'boxart');
  return (
    <Box
      sx={{
        backgroundImage: `url(${boxart?.url || '/logo.svg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundColor: colors.grey[300],
      }}
    >
      <Box sx={{ backdropFilter: 'blur(40px)' }}>
        <Container maxWidth="xl" sx={{ py: 3, display: 'flex', gap: 3 }}>
          {boxart ? (
            <Box
              component="img"
              src={boxart.url}
              width={boxart.width}
              height={boxart.height}
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
                category="boxart"
                maxWidth={512}
                onSucceed={(image) => {
                  updateGame({ addImageId: image.id });
                }}
              >
                <Button startIcon={<UploadFile />}>{t('Upload')}</Button>
              </ImageUploader>
            </Box>
          )}
          <Box sx={{ flex: '1 1 auto', color: '#fff', textShadow: '0 0 0.2em rgba(0,0,0,0.3)' }}>
            <Typography variant="h3">{game.displayName}</Typography>
            <Typography>{game.name}</Typography>
            <Typography>
              {t('Platform')}: {game.platform.name}
            </Typography>
            <Typography>
              {t('Region')}: {game.region}
            </Typography>
            <Typography>
              {t('Language')}: {game.language}
            </Typography>
            <Typography>
              {t('Serial')}: {game.serial}
            </Typography>
            <Typography>{t('Release date')}: ????-??-??</Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
