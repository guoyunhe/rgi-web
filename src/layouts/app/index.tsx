import { Box, colors } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

/**
 * Default layout for all users
 */
export default function AppLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box sx={{ flex: '1 1 auto', bgcolor: colors.blueGrey[100] }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
