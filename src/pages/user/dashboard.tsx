import PageLoader from 'components/screanLoader';
import { ReducerType } from 'interfaces';
import { useCallback, useEffect, useState } from 'react';
import Geocode from 'react-geocode';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getAddressStatus, getProfile, getUserProfile } from 'store/actions';
import { PROFILE } from 'utils/enums';

const UserDashboard = () => {
  const [state, setState] = useState('');

  const { errorMessage, addressFound, pageLoading, loading } = useSelector(
    (state: ReducerType) => state.UserReducer
  );
  const dispatch = useDispatch();

  const handleAddress = useCallback(
    (e) => {
      e.preventDefault();

      if (!state) return;

      Geocode.fromAddress(state).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);

          if (!lat || !lng) return toast.error('Invalid location');

          dispatch(getAddressStatus(lat, lng));
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
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem('$admin_')) {
      dispatch(getProfile(PROFILE.admin));
    } else {
      dispatch(getProfile(PROFILE.user));
    }
  }, [dispatch]);

  return (
    <section className='user__dashboard'>
      {/* <div className='background__illustration'></div> */}
      {pageLoading ? <PageLoader /> : ''}
      <div className='content'>
        <input
          type='text'
          placeholder='Please enter city name'
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        <button onClick={handleAddress} disabled={loading}>
          {loading ? (
            <div className='spinner-border text-light' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          ) : (
            <i className='bi bi-search'></i>
          )}
        </button>
      </div>

      {addressFound !== -1 && (
        <div
          className={`result__div ${
            addressFound ? 'success' : addressFound === 0 ? 'error' : ''
          }`}
        >
          {addressFound ? 'Yes' : addressFound === 0 ? 'No' : ''}
        </div>
      )}
    </section>
  );
};

export default UserDashboard;
