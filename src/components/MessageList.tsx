import React from "react";
import { Message } from '../App';
import './MessageList.css'

interface MessageListProp {
    messages: Message[];
}
 
export const MessageList: React.FC <MessageListProp> = ({ messages }) => (
    <ul className="ulMsg">
        {messages.map((i) => (
            <li className="liMsg" key={i.id}>{i.author}: {i.text}</li>
            ))
        }
    </ul>
);


