import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';
import Layout from '../Pages/Layout/Layout';
import { selectIsRefreshing } from '../redux/auth/selectorsAuth';
import { refresThunk } from '../redux/auth/operationsAuth';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'));
const NewsPage = lazy(() => import('Pages/NewsPage/NewsPage'));
const OurFriendsPage = lazy(() =>
  import('Pages/OurFriendsPage/OurFriendsPage')
);
const NoticesPage = lazy(() => import('Pages/NoticesPage/NoticesPage'));
const Register = lazy(() => import('Pages/Register/Register'));
const Login = lazy(() => import('Pages/Login/Login'));
const ProfilePage = lazy(() => import('Pages/ProfilePage/ProfilePage'));
const AddPetPage = lazy(() => import('Pages/AddPetPage/AddPetPage'));
const NotFoundPage = lazy(() => import('Pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="friends" element={<OurFriendsPage />} />
          <Route path="notices" element={<NoticesPage />} />

          <Route element={<PublicRoute />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="add-pet" element={<AddPetPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default App;
