import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from './Box';
import Logo from './Logo';

const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Box
      as="header"
      backgroundImage="linear-gradient(90deg, rgba(249,195,100,1) 0%, rgba(247,222,211,0.950315160243785) 100%)"
      display="flex"
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      height="70px"
      pt="10px"
      pb="10px"
      pr="40px"
      pl="40px"
      borderBottom="5px"
      borderBottomStyle="solid"
      borderBottomColor="#6b3704"
    >
      <Navigation />
      <Logo />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <Outlet />
    </Box>
  );
};
export default AppBar;
