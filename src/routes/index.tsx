import { Suspense, lazy, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from 'components/loader';
import AdminAuth from './AuthRoute';
import Navbar from 'components/navbar';
import UserDashboard from 'pages/user/dashboard';
import UserAuth from './UserAuth';

const LoginPage = lazy(() => import('pages/index'));
const AdminDashboard = lazy(() => import('pages/admin/dashboard'));

const IndexRouter = () => {
  const getRoutes = useCallback(() => {
    return (
      <>
        <Route
          path='/add'
          element={
            <>
              <Navbar />
              <AdminAuth>
                <AdminDashboard />
              </AdminAuth>
            </>
          }
        />
        <Route
          path='/uu'
          element={
            <>
              <Navbar />
              <UserAuth>
                <UserDashboard />
              </UserAuth>
            </>
          }
        />
      </>
    );
  }, []);

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          {getRoutes()}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default IndexRouter;
