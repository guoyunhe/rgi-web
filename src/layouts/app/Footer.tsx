import { Box, Container, Link } from '@mui/material';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <Box py={4}>
      <Container maxWidth="xl" sx={{ display: 'flex', gap: 2 }}>
        <Box>
          &copy; {year} {import.meta.env.VITE_APP_NAME}
        </Box>
        <Box sx={{ flex: '1 1 auto' }} />
        <Link href="https://t.me/retrogameindex" target="_blank">
          Telegram
        </Link>
        <Link href="https://github.com/guoyunhe/rgi-web" target="_blank">
          GitHub
        </Link>
      </Container>
    </Box>
  );
}
