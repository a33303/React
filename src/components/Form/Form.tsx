import React, { useState, FC } from 'react';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AUTHORS } from '../../constants';
import { set } from 'firebase/database';
import { getMessagesListRefId } from '../../services/firebase';
import { nanoid } from 'nanoid';
import styles from "../Form/Form.module.css";

export const Form: FC = () => {
  const dispatch = useDispatch();
  const { chatId } = useParams<{ chatId?: string }>();
  const [text, setText] = useState('');

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (chatId) {
      const id = nanoid();
      set(getMessagesListRefId(chatId, id), {
        id,
        text,
        author: AUTHORS.user,
      });
      // dispatch(
      //   addMessageWithThunk({
      //     chatId,
      //     text,
      //     author: AUTHORS.user,
      //   })
      // );
    }

    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
          label="Enter message"
          value={text}
          className={styles.sendMSg}
          onChange={(ev) => setText(ev.target.value)}
      />
      <Button type="submit">
        Send
      </Button>
    </form>
  );
};
