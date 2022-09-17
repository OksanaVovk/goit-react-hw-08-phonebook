import React from 'react';
import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav>
      <Link to="/register">Registration</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default AuthNav;
