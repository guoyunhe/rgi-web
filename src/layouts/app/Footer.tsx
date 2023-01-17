import { Box, Container } from '@mui/material';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <Box py={4}>
      <Container maxWidth="xl">
        &copy; {year} {import.meta.env.VITE_APP_NAME}
      </Container>
    </Box>
  );
}
