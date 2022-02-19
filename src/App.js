import React, { useEffect, useState } from "react"
import { Form } from "./components/Form"
import { MessageList } from "./components/MessageList"
import { nanoid } from 'nanoid'
import './App.css'

const StartChat = [
    {
        id:nanoid(),
        author: 'Alex',
        text: 'Hi, Lesson 2 React JS'
    }
]

export const App = () => {
    const [messages, setMessages] = useState(StartChat)

    useEffect(() => {
        if (messages.length && messages[messages.length -1].author === 'User') {
         const timer = setTimeout (() => addMessage({
              author: 'System',
              text: `Hi, I'm bot on chat`
            }), 2000)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [messages])

    const addMessage = ({text, author}) => {
        setMessages([
            ...messages, 
            {
               id: nanoid(),
               author,
               text
             }
         ])
     }

    console.log(messages)

    return (
        <>
            <h1>Chat room React JS</h1>
            <MessageList messages={messages}/>
            <Form addMessage={addMessage}/>
        </>   
    )
}

export default App