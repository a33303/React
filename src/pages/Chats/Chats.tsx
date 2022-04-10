import React from 'react';
import { Form } from '../../components/Form';
import { MessageList } from '../../components/MessageList';
import { WithClasses } from '../../HOC/WithClasses';
import style from './Chats.module.css';
import { ChatList } from '../../components/ChatList';
import { useSelector } from 'react-redux';
import { selectMessages } from '../../store/messages/selectors';
import { Redirect, useParams } from 'react-router-dom';

export const Chats: React.FC = () => {
  const { chatId } = useParams<{ chatId?: string }>();
  const MessageListWithClass = WithClasses(MessageList);
  const messages = useSelector(selectMessages)

  if (chatId && !messages[chatId]) {
    return <Redirect to="/chats" />;
  }

  return (
    <>
      <ChatList />
      <MessageListWithClass
        messages={chatId ? messages[chatId] : []}
        classes={style.border}
      />
      <Form />
    </>
  );
};
