import React from 'react';

const UserMenu = ({ name }) => {
  return (
    <div>
      <p>Hello ${name}</p>
      <button type="button">Log Out</button>
    </div>
  );
};

export default UserMenu;
