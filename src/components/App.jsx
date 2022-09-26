import AppBar from './AppBar';
import { Route, Routes } from 'react-router-dom';
import authOperations from 'redux/auth/auth-operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import Spinner from './Spinner';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import authSelector from 'redux/auth/auth-selectors';
import { Box } from './Box';
import Modal from './Modal';

const Home = lazy(() => import('../Pages/Home'));
const Contacts = lazy(() => import('../Pages/Contacts'));
const RegisterForm = lazy(() => import('../Pages/RegisterForm'));
const LoginForm = lazy(() => import('../Pages/LoginForm'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelector.getIsFetchingCurrentUser
  );
  const showModal = useSelector(state => state.fatch.showModal);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Box as="div">
        {showModal && <Modal />}
        <AppBar />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/goit-react-hw-08-phonebook" element={<Home />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
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
