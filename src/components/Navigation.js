import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contacts from './Switch';

const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};

export default Navigation;
