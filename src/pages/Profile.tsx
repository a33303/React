import { Button } from '@mui/material';
import React, { FC } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { authProfile, toggleVisible } from '../store/profile/actions';
import { getProfileVisible, getProfileName } from '../store/profile/selectors';
import { StoreState } from '../store';
import { RouteComponentProps } from 'react-router-dom';

export const Profile: FC<RouteComponentProps> = (props) => {
  const visible = useSelector(getProfileVisible, shallowEqual);
  const name = useSelector(getProfileName, shallowEqual);
  const isAuth = useSelector((state: StoreState) => state.profile.isAuth);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Profile page</h2>
      <input
        type="checkbox"
        checked={visible}
        onChange={() => dispatch(toggleVisible)}
      />
      <p>{name}</p>
      {isAuth ? (
        <Button type="submit" onClick={() => dispatch(authProfile(false))}>
          Sign out
        </Button>
      ) : (
        <Button type="submit" onClick={() => props.history.push('/login')}>
          Sign In
        </Button>
      )}
    </>
  );
};
