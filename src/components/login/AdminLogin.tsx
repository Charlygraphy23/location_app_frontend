import Forms from 'components/form';
import { ReducerType } from 'interfaces';
import { useEffect } from 'react';
import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { requestAdminLogin } from 'store/actions';
import { clearTokens } from 'utils/index.utils';

type AdminLoginTypes = {
  hide: boolean;
  toggleScreen: () => void;
};

const AdminLogin = ({ hide, toggleScreen, ...props }: AdminLoginTypes) => {
  const [state, setState] = useState({
    email: 'demo@yopmail.com',
    password: '1234',
  });
  const dispatch = useDispatch();
  const { loading, token, error, errorMessage } = useSelector(
    (state: ReducerType) => state.AdminReducer
  );
  const handleChange = useCallback((e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (loading) return;

      clearTokens();
      dispatch(requestAdminLogin(state.email, state.password));
    },
    [dispatch, loading, state.email, state.password]
  );

  useEffect(() => {
    if (error) toast.error(errorMessage);
  }, [error, errorMessage]);

  if (token) return <Navigate to='/add' />;

  return (
    <section className={`login__component ${hide ? 'hide' : ''}`}>
      <h3>
        <small>Welcome back</small> Admin
      </h3>
      <p className='sub__head'>Please provide login info</p>

      <Forms
        placeholder='abc@example.com'
        email={state.email}
        password={state.password}
        onSubmit={handleSubmit}
        onChange={handleChange}
        loading={loading}
      />

      <p className='footer__text' onClick={toggleScreen}>
        <i className='bi bi-arrow-left mr-5'></i> <span>User login ?</span>
      </p>
    </section>
  );
};

export default AdminLogin;
