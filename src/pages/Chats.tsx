import React, { useCallback, useEffect, useState } from "react";
import { Form } from "../components/Form";
import { MessageList } from "../components/MessageList";
import { nanoid } from "nanoid"
import { Link, useParams, Redirect } from "react-router-dom";
import { WithClasses } from '../HOC/WithClasses';

// import * as style from "./Chats.module.css";

export interface Message {
    id: string;
    text: string;
    author: string;
}

export interface StartChat {
    [key: string]: Message[];
}

const defaultMessages: StartChat = {
    Interesting: [
        {
            id:'1',
            author: 'Admin',
            text: 'Hi, Lesson 5 React JS! You enter chats to interesting'
        }
    ],
    Everything: [
        {
            id:'2',
            author: 'Admin',
            text: 'Hi, Lesson 5 React JS! You enter chats to everything'
        }
    ],
    Countries: [
        {
            id:'3',
            author: 'Admin',
            text: 'Hi, Lesson 5 React JS! You enter chats to countries'
        },
    ],
};

const chats = [
    {id: '1', name: "Interesting"},
    {id: '2', name: "Everything"},
    {id: '3', name: "Countries"},
];

export const Chats: React.FC = () => {
    const [messages, setMessages] = useState(defaultMessages);
    const { chatId } = useParams<{ chatId?: string }>();
    const MessageListWithClass = WithClasses(MessageList);

    const addSendMessage = useCallback(
        ({ text, author }: { text: string; author: string }) => {
            setMessages((prevMessages) => {
                return {
                    ...prevMessages,
                    [`chat${chatId}`]: [
                        ...prevMessages[`chat${chatId}`],
                        {
                            id: nanoid(),
                            author,
                            text,
                        },
                    ],
                };
            });
        },
        [chatId]
    );

    useEffect(() => {
        if (
            messages[`chat${chatId}`]?.length &&
            messages[`chat${chatId}`][messages[`chat${chatId}`].length - 1].author ===
            'User'
        ) {
            const timer = setTimeout (() =>
                addSendMessage({
                author: 'System',
                text: `Hi, I'm bot on chat`
            }), 2000)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [messages, chatId, addSendMessage])

    if (!messages[`chat${chatId}`]) {
        return <Redirect to="/" />
    }

    return (
        <>
            <div className='chat-list'>
                <ul>
                    {chats.map((i) => (
                        <li key={i.id}>
                            <Link to={`/chats/${i.id}`}>{i.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='message-list'>
                <h1>Chat room React JS</h1>
                <MessageListWithClass messages={messages[`/chats${chatId}`]} classes={""}/>
                <Form addMessage={addSendMessage} />
            </div>
        </>
    )
}