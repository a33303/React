import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addMessageWithThunk } from '../store/messages/actions';
import { AUTHORS } from '../constants';

export const Form: React.FC = () => {
  const dispatch = useDispatch();
  const { chatId } = useParams<{ chatId?: string }>();
  const [text, setText] = useState('');

  const handleText = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (chatId) {
      dispatch(
        addMessageWithThunk({
          chatId,
          text,
          author: AUTHORS.user,
        })
      );
      setText('');
    }
  };

  return (
    <form onSubmit={handleText}>
      <TextField
        id="outlined-basic"
        label="Enter message"
        value={text}
        onChange={(ev) => setText(ev.target.value)}
      />

      <Button type="submit">Send</Button>
    </form>
  );
};
