import Forms from 'components/form';
import { ReducerType } from 'interfaces';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { toast } from 'react-toastify';
import { requestUserLogin } from 'store/actions';
import { clearTokens } from 'utils/index.utils';

type UserLoginTypes = {
  hide: boolean;
  toggleScreen: () => void;
};

const UserLogin = ({ hide, toggleScreen }: UserLoginTypes) => {
  const [state, setState] = useState({
    email: 'rahul@yopmail.com',
    password: '1234',
  });
  const dispatch = useDispatch();
  const { loading, token, error, errorMessage } = useSelector(
    (state: ReducerType) => state.UserReducer
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
      dispatch(requestUserLogin(state.email, state.password));
    },
    [dispatch, loading, state.email, state.password]
  );

  useEffect(() => {
    if (error) toast.error(errorMessage);
  }, [error, errorMessage]);

  if (token) return <Navigate to='/uu' />;

  return (
    <section className={`login__component ${hide ? 'hide' : ''}`}>
      <h3>Welcome back</h3>
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
        <span>Admin login ?</span>
        <i className='bi bi-arrow-right'></i>{' '}
      </p>
    </section>
  );
};

export default UserLogin;
