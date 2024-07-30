import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth';

const PublicRoute = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  // const isLogin = false


  return isLogin ? <Navigate to="/profile" /> : <Outlet />;
};


export default PublicRoute