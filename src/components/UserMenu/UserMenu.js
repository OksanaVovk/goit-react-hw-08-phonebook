import React from 'react';
import authOperations from 'redux/auth/auth-operations';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '../Box';
import Button from '@mui/material/Button';
import { Text } from './UserMenu-styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);
  return (
    <Box as="div" display="flex" flexDirection="row" gridGap="10px">
      <Text>{name}</Text>
      <Button
        type="button"
        variant="contained"
        color="success"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default UserMenu;
