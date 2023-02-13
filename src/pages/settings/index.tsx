import { Container } from '@mui/material';
import ProfileSection from './ProfileSection';

export default function SettingsPage() {
  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <ProfileSection />
    </Container>
  );
}
