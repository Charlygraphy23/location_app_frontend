import { UserLoginComponent, AdminLoginComponent } from 'components/login';
import { useState } from 'react';
import { Navigate } from 'react-router';
import { PROFILE } from 'utils/enums';

const LoginPage = () => {
  const [screen, setUserScreen] = useState(PROFILE.user);

  if (localStorage.getItem('$admin_')) return <Navigate to='/add' />;
  else if (localStorage.getItem('$user_')) return <Navigate to='/uu' />;

  return (
    <div className='login__page'>
      <div className='background__illustrate'></div>
      <section className='form__section'>
        <div
          style={{ position: 'relative' }}
          className='d-flex justify-content-center align-items-center w-100'
        >
          <UserLoginComponent
            hide={screen === PROFILE.admin}
            toggleScreen={() => setUserScreen(PROFILE.admin)}
          />
          <AdminLoginComponent
            hide={screen === PROFILE.user}
            toggleScreen={() => setUserScreen(PROFILE.user)}
          />
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
