import React from 'react';
import authOperations from 'redux/auth/auth-operations';
import { useSelector, useDispatch } from 'react-redux';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);
  return (
    <div>
      <p>Hello ${name}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
