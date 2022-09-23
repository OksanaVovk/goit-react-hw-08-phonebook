import React from 'react';
import authOperations from 'redux/auth/auth-operations';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from './Box';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);
  return (
    <Box as="div" display="flex" flexDirection="row" gridGap="10px">
      <p>Hello {name}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </button>
    </Box>
  );
};

export default UserMenu;
