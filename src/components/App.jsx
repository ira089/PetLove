import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { lazy } from 'react';
import Layout from '../Pages/Layout/Layout';
import { selectIsRefreshing } from '../redux/auth/selectorsAuth';
import { refresThunk } from '../redux/auth/operationsAuth';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Register from 'Pages/Register/Register';
import Login from 'Pages/Login/Login';
import NotFoundPage from 'Pages/NotFoundPage/NotFoundPage';
import HomePage from 'Pages/HomePage/HomePage';
import ProfilePage from 'Pages/ProfilePage/ProfilePage';
import Loader from './Loader/Loader';
import { NewsPage } from 'Pages/NewsPage/NewsPage';
import OurFriendsPage from 'Pages/OurFriendsPage/OurFriendsPage';
import NoticesPage from 'Pages/NoticesPage/NoticesPage';
import AddPetPage from 'Pages/AddPetPage/AddPetPage';

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
            {/* <Route path="news" element={<NewsPage />} />
             <Route path="friends" element={<OurFriendsPage />} />
             <Route path="notices" element={<NoticesPage />} /> */}
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="add-pet" element={<AddPetPage/>} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default App;
