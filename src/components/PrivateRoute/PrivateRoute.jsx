import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  // const isLogin = useSelector(selectIsLoggedIn);
  const isLogin = true

  return !isLogin ? <Navigate to="/login" /> : <Outlet />;
};


export default PrivateRoute