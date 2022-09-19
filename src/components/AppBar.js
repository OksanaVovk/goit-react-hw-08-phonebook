import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div>
      <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Outlet />
    </div>
  );
};
export default AppBar;
