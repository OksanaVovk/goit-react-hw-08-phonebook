import AppBar from './AppBar';
import { Route, Routes } from 'react-router-dom';
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

const Home = lazy(() => import('../Pages/Home'));
const Contacts = lazy(() => import('../Pages/Contacts'));
const RegisterForm = lazy(() => import('../Pages/RegisterForm'));
const LoginForm = lazy(() => import('../Pages/LoginForm'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelector.getIsFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div>
        <AppBar />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
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
      </div>
    )
  );
};
