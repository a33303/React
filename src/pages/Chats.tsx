import React, { useCallback, useEffect, useState } from 'react'
import { Form } from 'components/Form'
import { MessageList } from 'components/MessageList'
import { nanoid } from 'nanoid'
import { useParams, Redirect } from 'react-router-dom'
import {ListItemButton, ListItemText} from "@mui/material"

export interface Message {
    id: string;
    text: string;
    author: string;
}

export interface StartChat {
    [key: string]: Message[];
}

const defaultMessages:       StartChat = {
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
        }
    ]
}

const chats = [
    {id: '1', name: "Interesting"},
    {id: '2', name: "Everything"},
    {id: '3', name: "Countries"},
]

export function Chats() {
    const [messages, setMessages] = useState(StartChat)
    const {chatId} = useParams() // Не подгружается чаты.

    // if (chats.map((i) => i.id === chatId).length === 0) {
    //     history.push("/")
    // }

    const addSendMessage = useCallback(
        ({ text, author }) => {
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
                        <ListItemButton key={i.id}>
                            <ListItemText to={`/chats/${i.id}`} primary={i.name} />
                        </ListItemButton>
                    ))}
                </ul>
            </div>
            <div className='message-list'>
                <h1>Chat room React JS</h1>
                <MessageList messages={messages[`/chats${chatId}`]}/>
                <Form addMessage={addSendMessage}/>
            </div>
        </>
    )
}