import React from 'react';
import { Navigate } from 'react-router-dom';

const UserAuth = ({ children }: any) => {
  return (
    <>{localStorage.getItem('$user_') ? children : <Navigate to='/' />}</>
  );
};

export default UserAuth;
