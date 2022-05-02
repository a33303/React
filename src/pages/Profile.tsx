import {Button, TextField} from '@mui/material';
import React, {FC, useEffect, useState} from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getProfileVisible } from '../store/profile/selectors';
import { StoreState } from '../store';
import { RouteComponentProps, Link } from 'react-router-dom';
import {logOut, userRef, } from "../services/firebase";
import { onValue, set } from 'firebase/database';
import {toggleVisible} from "../store/profile/actions";

export const Profile: FC<RouteComponentProps> = (props) => {
  const visible = useSelector(getProfileVisible, shallowEqual);
 // const name = useSelector(getProfileName, shallowEqual);
  const isAuth = useSelector((state: StoreState) => state.profile.isAuth);
  const [name, setName] = useState('');
  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = onValue(userRef, (snapshot) => {
        const user = snapshot.val();
        setName(user.name || '');
      });

    return unsubscribe;
  },[]);

  const handleChangeName = () => {
    set(userRef, {
        name,
    });
  };

  return (
    <>
      <h2>Profile page</h2>
      <TextField
            type="text"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleChangeName}>Change Name</Button>

      <br />

      <input
          type="checkbox"
          checked={visible}
          onChange={() => dispatch(toggleVisible)}
      />
      <p>{name}</p>
      {isAuth ? (
        <Button type="submit" onClick={() => logOut()}>
          Sign Out
        </Button>
      ) : (
        <Link to="/login">
          <Button>Sign In</Button>
        </Link>
      )}
    </>
  );
};
