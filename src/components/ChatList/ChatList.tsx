import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Chat } from '../../store/chatlist/types';
import { nanoid } from 'nanoid';
import {
  addChat,
  deleteChat,
  initChatsFB,
} from './../../store/chatlist/actions';
import { createMessageChat } from '../../store/messages/actions';
import { deleteMessageChat } from './../../store/messages/actions';
import { onValue, set, remove } from 'firebase/database';
import {
  chatsRef,
  getChatListById, getMessagesListRefId,
  getMessagesRefId,
} from './../../services/firebase';
import {Button, TextField} from "@mui/material";

export const ChatList: FC = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const chatList = useSelector((state: { chatlist: Chat[] }) => state.chatlist);

  useEffect(() => {
    dispatch(initChatsFB());
  }, []);

  const handleAddChat = () => {
    const id = nanoid();
    set(getChatListById(id), {
      id,
      name,
    });
    set(getMessagesRefId(id), {
      empty: true,
    });
    // dispatch(addChat({ id, name: value }));
    // dispatch(createMessageChat(id));
    setName('');
  };

  const handleDeleteChat = (chatId: string) => {
    remove(getChatListById(chatId));
    remove(getMessagesRefId(chatId));
    // dispatch(deleteChat(chatId));
    // dispatch(deleteMessageChat(chatId));
  };

  // const hangleDeleteMassage = (chatId: string) => {
  //   remove(getMessagesRefId(chatId));
  // }

  return (
    <>
      <h2>Chats</h2>
      <TextField
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleAddChat}>Add chat</Button>
      <ul>
        {chatList.map((i) => (
          <li key={i.id}>
            <Link to={`/chats/${i.id}`}>{i.name}</Link>
            <Button onClick={() => handleDeleteChat(i.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </>
  );
};
