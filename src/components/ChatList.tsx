import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addChat, deleteChat } from '../store/chatlist/actions';
import {
  createMessageChat,
  deleteMessageChat,
} from '../store/messages/actions';
import { Chat } from '../store/chatlist/types';
import { Button, TextField } from '@mui/material';

export const ChatList: React.FC = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const chatList = useSelector((state: { chatlist: Chat[] }) => state.chatlist);

  const handleAddChat = () => {
    const id = nanoid();
    dispatch(addChat({ id, name: value }));
    dispatch(createMessageChat(id));
    setValue('');
  };

  const handleDeleteChat = (chatId: string) => {
    dispatch(deleteChat(chatId));
    dispatch(deleteMessageChat(chatId));
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Enter names chats"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit" onClick={handleAddChat}>
        Add chat
      </Button>
      <ul>
        {chatList.map((i) => (
          <li key={i.id}>
            <Link to={`/chats/${i.id}`}>{i.name}</Link>
            <Button type="submit" onClick={() => handleDeleteChat(i.id)}>
              delete
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
};
