import React from 'react';
import { Link } from 'react-router-dom';
import { clearTokens } from 'utils/index.utils';
import { ReducerType } from 'interfaces';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearAllState,
  clearStateAdmin,
  clearStateUser,
  removeToken,
  removeUserToken,
} from 'store/actions';
import { PROFILE } from 'utils/enums';

const Navbar = () => {
  const { profile } = useSelector((state: ReducerType) => state.AdminReducer);
  const { profile: userProfile } = useSelector(
    (state: ReducerType) => state.UserReducer
  );
  const { profile: CommonProfile } = useSelector(
    (state: ReducerType) => state.CommonReducer
  );
  const dispatch = useDispatch();

  return (
    <nav className='navbar__default'>
      <div className='name__head'>
        <h3>Hi</h3>
        <h6>
          {CommonProfile === PROFILE.user
            ? userProfile?.firstName
            : profile?.firstName}
        </h6>
      </div>

      <div className='avatar__icon'>
        <div className='dropdown'>
          <p
            className='dropdown-toggle'
            id='dropdownMenuButton1'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            {CommonProfile === PROFILE.user
              ? userProfile?.firstName
                ? userProfile.firstName.split('')[0].toUpperCase()
                : '.'
              : profile?.firstName
              ? profile.firstName.split('')[0].toUpperCase()
              : '.'}
          </p>
          <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
            <li>
              <Link
                className='dropdown-item'
                to='/'
                onClick={() => {
                  dispatch(removeToken());
                  dispatch(removeUserToken());
                  dispatch(clearAllState());
                  dispatch(clearStateUser());
                  dispatch(clearStateAdmin());
                  clearTokens();
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
