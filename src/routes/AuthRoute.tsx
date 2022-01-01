import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminAuth = ({ children }: any) => {
  return (
    <>{localStorage.getItem('$admin_') ? children : <Navigate to='/' />}</>
  );
};

export default AdminAuth;
