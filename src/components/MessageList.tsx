import React from 'react';
import { Message } from '../App';
import styles from './MessageList.module.css';

interface MessageListProp {
  messages: Message[];
}

export const MessageList: React.FC<MessageListProp> = ({ messages }) => (
  <ul className={styles.ulMsg}>
    {messages.map((i) => (
      <li className={styles.liMsg} key={i.id}>
        {i.author}: {i.text}
      </li>
    ))}
  </ul>
);
