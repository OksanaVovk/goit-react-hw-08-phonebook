import React from 'react';
import authSelector from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { LinkNav } from './Navigation-styled';
import { Box } from './Box';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  return (
    <Box as="nav" display="flex" flexDirection="row" gridGap="20px">
      <LinkNav to="/">Home</LinkNav>
      <LinkNav to="/form">Form</LinkNav>
      {isLoggedIn && <LinkNav to="/contacts">Contacts</LinkNav>}
    </Box>
  );
};

export default Navigation;
