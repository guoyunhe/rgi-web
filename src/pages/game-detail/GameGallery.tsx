import { Delete, UploadFile } from '@mui/icons-material';
import { Box, Button, Container, IconButton } from '@mui/material';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import useAuth from '../../components/auth/useAuth';
import ImageUploader from '../../components/images/ImageUploader';
import Game from '../../types/models/Game';

export interface GameGalleryProps {
  game: Game;
  updateGame: (data: Partial<Game> & { addImageId?: number; removeImageId?: number }) => void;
}

export default function GameGallery({ game, updateGame }: GameGalleryProps) {
  const { t } = useTranslation();
  const { user } = useAuth();
  return (
    <Box sx={{ backdropFilter: 'blur(40px)' }}>
      <Container maxWidth="xl" sx={{ py: 3, display: 'flex', gap: 3 }}>
        {game.images?.map((image) => (
          <Box key={image.id} sx={{ position: 'relative' }}>
            <Box
              component="img"
              src={image.url}
              width={image.width}
              height={image.height}
              sx={{ width: 'auto', height: 300 }}
            />
            {user?.role === 'admin' && (
              <IconButton
                color="error"
                onClick={async () => {
                  axios.delete('/images/' + image.id);
                  updateGame({ removeImageId: image.id });
                }}
                sx={{ position: 'absolute', top: 10, right: 10 }}
              >
                <Delete />
              </IconButton>
            )}
          </Box>
        ))}
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
            type="boxart"
            maxWidth={512}
            onSucceed={(image) => {
              updateGame({ addImageId: image.id });
            }}
          >
            <Button startIcon={<UploadFile />}>{t('Upload')}</Button>
          </ImageUploader>
        </Box>
      </Container>
    </Box>
  );
}
