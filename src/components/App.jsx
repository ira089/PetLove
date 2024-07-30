import { Routes, Route } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { lazy } from 'react';
import Layout from '../Pages/Layout/Layout';
import { selectIsRefreshing } from '../redux/auth/selectorsAuth';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute'
import Register from 'Pages/Register/Register';
import Login from 'Pages/Login/Login';
import NotFoundPage from 'Pages/NotFoundPage/NotFoundPage';
import HomePage from 'Pages/HomePage/HomePage';
import ProfilePage from 'Pages/ProfilePage/ProfilePage';

const App = () => {
  // const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  // useEffect(() => {
  //   dispatch(refresThunk());
  // }, [dispatch]);

  return isRefreshing ? ( 'Loading...') : (
    <>
    <Routes>
       <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>}/>
       
          <Route element={<PublicRoute />}>
             <Route path="register" element={<Register />} />
             <Route path="login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="profile" element={<ProfilePage/>}/>
          
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
        
    </Routes>
    <ToastContainer autoClose={3000} />

    </>
  )
}

export default App


