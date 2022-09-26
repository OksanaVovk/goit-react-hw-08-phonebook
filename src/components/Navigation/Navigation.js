import React from 'react';
import authSelector from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { LinkNav } from './Navigation-styled';
import { Box } from '../Box';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  return (
    <Box as="nav" display="flex" flexDirection="row" gridGap="20px">
      <LinkNav to="/goit-react-hw-08-phonebook">Home</LinkNav>
      {isLoggedIn && <LinkNav to="/contacts">Contacts</LinkNav>}
    </Box>
  );
};

export default Navigation;
