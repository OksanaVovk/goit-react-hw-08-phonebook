import React from 'react';
import { Box } from '../Box';
import { LinkNav } from './AuthNav_styled';

const AuthNav = () => {
  return (
    <Box as="nav" display="flex" flexDirection="row" gridGap="20px">
      <LinkNav to="/register">Sign up</LinkNav>
      <LinkNav to="/login">Log in</LinkNav>
    </Box>
  );
};

export default AuthNav;
