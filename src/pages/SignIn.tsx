import React, { FC, useState } from 'react';
import {Button, TextField} from '@mui/material';
import {Link, RouteComponentProps} from 'react-router-dom';
import {logIn} from "../services/firebase";
import '../App.css';
import styles from '../components/MessageList/MessageList.module.css';

export const SignIn: FC<RouteComponentProps> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError('');

      try {
          await logIn(email, password);
      }  catch (err){
          setError((err as Error).message)
          }
  };

  return (
      <>
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
              <Button type="submit">Login</Button>
              {error && <p className={styles.errLogin}>{error}</p>}
          </form>
          <Link to="/signup">
              <Button type="submit">Sign Up</Button>
          </Link>
      </>
  );
};
