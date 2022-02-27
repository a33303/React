import React, { Suspense } from "react"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import { Chats } from "./pages/Chats"
import { NavBar } from "./components/NavBar"
import { NotFound } from "./pages/Not Found"
import { About } from "./pages/About"
import { HomePage } from "./pages/HomePage"
import { Profile } from "./components/Profile"

// import React, { useEffect, useState } from "react"
// import { Form } from "./components/Form"
// import { MessageList } from "./components/MessageList"
// import { nanoid } from 'nanoid'
// import './App.css'
// import {ChatsList} from "./components/ChatsList";

// const StartChat = [
//     {
//         id:nanoid(),
//         author: 'Alex',
//         text: 'Hi, Lesson 2 React JS'
//     }
// ]
//
// export const App = () => {
//     const [messages, setMessages] = useState(StartChat)
//
//     useEffect(() => {
//         if (messages.length && messages[messages.length -1].author === 'User') {
//             const timer = setTimeout (() => addMessage({
//                 author: 'System',
//                 text: `Hi, I'm bot on chat`
//             }), 2000)
//             return () => {
//                 clearTimeout(timer)
//             }
//         }
//     }, [messages])
//
//     const addMessage = ({text, author}) => {
//         setMessages([
//             ...messages,
//             {
//                 id: nanoid(),
//                 author,
//                 text
//             }
//         ])
//     }
//
//     console.log(messages)


export const App = () => {
    return (
      <Suspense fallback={<div>Downloads components...</div>}>
        <BrowserRouter>
            <NavBar />
                <Switch>
                    <Route exact path="/" component={ HomePage } />
                    <Route path="/chats">
                        <Route exact path="/chats">
                            <Redirect to="/chats/1" />
                        </Route>
                        <Route path="/chats/:id" component={ Chats } />
                    </Route>
                    <Route exact path="/about" component={ About } />
                    <Route exact path="/profile" component={ Profile } />
                    <Route path="*" component={ NotFound } />
                </Switch>
        </BrowserRouter>
       </Suspense>
    )
    // return (
    //     <>
    //       <div className='chat-list'>
    //           <h3>Themes</h3>
    //           <ChatsList />
    //       </div>
    //       <div className='message-list'>
    //           <h1>Chat room React JS</h1>
    //           <MessageList messages={messages}/>
    //           <Form addMessage={addMessage}/>
    //       </div>
    //     </>
    // )
}

export default App