import React from "react";
import { Message } from '../App';

interface MessageListProp {
    messages: Message[];
    // extraInfo: string;
}

export const MessageList: React.FC <MessageListProp> = ({ messages }) => {
    return (
    <ul>
        {messages.map((i) => (
                <li key={i.id}>{i.author}: {i.text}</li>
            ))
        }
    </ul>
    )
}

