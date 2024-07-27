import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  // const isLogin = useSelector(selectIsLoggedIn);
  const isLogin = false


  return isLogin ? <Navigate to="/contacts" /> : <Outlet />;
};


export default PublicRoute