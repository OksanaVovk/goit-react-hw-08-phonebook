import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { Route, Routes } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <nav>
        <Link to="/register">Registration</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
};

export default AuthNav;
