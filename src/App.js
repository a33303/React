import React from 'react'
import ReactDOM from 'react-dom'
// import Message from "./components/Message" // Ошибка при импорте закомитил - пока в поиске решения

function Message(props) {
    return (
        <div>
            <h1>Hello, {props.text}!</h1>
            <h2>Lesson 1, React JS -GB </h2>
        </div>
    )
}

function App() {
    return (
        <div>
            <Message text="Aleksandr" />
            <Message text="Ivan" />
            <Message text="Nadya" />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)