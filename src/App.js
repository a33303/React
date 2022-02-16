import React from "react"
import Messages from "./components/Messages"
import './App.css'

function App() {
    return (
        <div>
            <Messages text="Aleksandr" />
            <Messages text="Ivan" />
            <Messages text="Nadya" />
        </div>
    )
}

export default App