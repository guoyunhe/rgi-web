import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

/**
 * Default layout for all users
 */
export default function AppLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
