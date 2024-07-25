import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
import Layout from '../Pages/Layout/Layout';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute'
import Register from 'Pages/Register/Register';
import Login from 'Pages/Login/Login';
import NotFoundPage from 'Pages/NotFoundPage/NotFoundPage';

const App = () => {
  return(
    <Routes>
       <Route path="/" element={<Layout />}>
          <Route element={<PublicRoute />}>
             <Route path="register" element={<Register />} />
             <Route path="login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            {/* <Route path="contacts" element={<ContactsPage />} /> */}
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
    </Routes>

  )
}



export default App


