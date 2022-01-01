import PageLoader from 'components/screanLoader';
import { ReducerType } from 'interfaces';
import { useLayoutEffect } from 'react';
import { useCallback, useEffect, useState } from 'react';
import Geocode from 'react-geocode';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getAdminProfile, getProfile, updateCity } from 'store/actions';
import { PROFILE } from 'utils/enums';

const AdminDashboard = () => {
  const [state, setState] = useState('');
  const dispatch = useDispatch();
  const { errorMessage, profile, pageLoading, loading } = useSelector(
    (state: ReducerType) => state.AdminReducer
  );

  const handleAddress = useCallback(
    (e) => {
      e.preventDefault();

      if (!state) return;

      Geocode.fromAddress(state).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;

          if (!lat || !lng) return toast.error('Invalid location');

          dispatch(updateCity(state, lat, lng));
        },
        (error) => {
          toast.error(errorMessage);
          console.error(error);
        }
      );
    },
    [dispatch, errorMessage, state]
  );

  useEffect(() => {
    dispatch(getAdminProfile());
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem('$admin_')) {
      dispatch(getProfile(PROFILE.admin));
    } else {
      dispatch(getProfile(PROFILE.user));
    }
  }, [dispatch]);

  useLayoutEffect(() => {
    setState(profile.city);
  }, [profile.city]);

  return (
    <section className='admin__dashboard'>
      {pageLoading ? <PageLoader /> : ''}
      <div className='background__illustration'></div>
      <div className='content'>
        <input
          type='text'
          placeholder='Please enter default city'
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        <button onClick={handleAddress} disabled={loading}>
          {loading ? (
            <div className='spinner-border text-light' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          ) : (
            'Set'
          )}
        </button>
      </div>
    </section>
  );
};

export default AdminDashboard;
