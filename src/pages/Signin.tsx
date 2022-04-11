import React, { FC, useState } from 'react';
import { Button, TextField } from '@mui/material';
import '../App.css';
import styles from '../components/MessageList.module.css';
import { useDispatch } from 'react-redux';
import { authProfile } from '../store/profile/actions';
import { RouteComponentProps } from 'react-router-dom';

export const SignIn: FC<RouteComponentProps> = (props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (login !== 'admin' || password !== 'admin123') {
      setError('Вы ввели не верные логин или пароль');
    } else {
      dispatch(authProfile(true));
      //<Redirect to={"chats "}/>;
      props.history.push('/chats');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Login"
        variant="outlined"
        type="text"
        onChange={(e) => setLogin(e.target.value)}
      />
      <br />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Button type="submit">Login</Button>
      {error && <p className={styles.errLogin}>{error}</p>}
    </form>
  );
};
