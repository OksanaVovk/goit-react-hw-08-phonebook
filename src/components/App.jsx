import AppBar from './AppBar';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
// import LoginForm from '../Pages/LoginForm';
// import RegisterForm from '../Pages/RegisterForm';
// import Home from '../Pages/Home';
// import Contacts from '../Pages/Contacts';
import authOperations from 'redux/auth/auth-operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import Spinner from './Spinner';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import authSelector from 'redux/auth/auth-selectors';
import SignIn from './FormEx';
import { Box } from './Box';
import Modal from './Modal';

const Home = lazy(() => import('../Pages/Home'));
const Contacts = lazy(() => import('../Pages/Contacts'));
const RegisterForm = lazy(() => import('../Pages/RegisterForm'));
const LoginForm = lazy(() => import('../Pages/LoginForm'));

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [number, setNumber] = useState('');
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelector.getIsFetchingCurrentUser
  );

  const onBtnFetchClick = (id, name, number) => {
    setId(id);
    setName(name);
    setNumber(number);
    toggleModal();
  };

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Box as="div">
        {showModal && (
          <Modal
            onClose={toggleModal}
            id={id}
            oldname={name}
            oldnumber={number}
          />
        )}
        <AppBar />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/goit-react-hw-08-phonebook" element={<Home />} />
            <Route path="/form" element={<SignIn />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts onBtnEditC={onBtnFetchClick} />
                </PrivateRoute>
              }
            />

            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegisterForm />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginForm />
                </PublicRoute>
              }
            />
          </Routes>
        </Suspense>
      </Box>
    )
  );
};
