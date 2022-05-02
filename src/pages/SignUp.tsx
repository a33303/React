import React, { FC, useState } from 'react';
import {Button, TextField} from '@mui/material';
import '../App.css';
import styles from '../components/MessageList/MessageList.module.css';
import { RouteComponentProps } from 'react-router-dom';
import {signUp} from "../services/firebase";

export const SignUp: FC<RouteComponentProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
        await signUp(email, password)
    } catch (err) {
        setError((err as Error).message);
    }
  };

  return (
          <form onSubmit={handleSubmit}>
              <TextField
                  id="outlined-basic"
                  label="Login"
                  variant="outlined"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
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
              <Button type="submit">Register</Button>
              {error && <p className={styles.errLogin}>{error}</p>}
          </form>
  );
};
