import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { Outlet } from 'react-router-dom';

const AppBar = () => {
  return (
    <div>
      <header>
        <Navigation />
        <AuthNav />
        <UserMenu />
      </header>
      <Outlet />
    </div>
  );
};
export default AppBar;
