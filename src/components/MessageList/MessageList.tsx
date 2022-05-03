import React from 'react';
import { Message } from '../../App';
import styles from './MessageList.module.css';
import {AUTHORS} from "../../constants";

interface MessageListProp {
  messages: Message[];
}


export const MessageList: React.FC<MessageListProp> = ({ messages }) => (
  <ul>
    {messages.map((i) => (
      <li className={i.author === AUTHORS.user ? styles.liMsg : styles.liMsgSystem} key={i.id}>
        {i.author}: {i.text}
      </li>
    ))}
  </ul>
);
