import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

// Layout of static landing pages for guests
export default function AppLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
