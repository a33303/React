import React, { useState } from "react"

export function Form ({ addMessage }) {
    const [text, setText] = useState('')

    const addText = (event) => {
        event.preventDefault()
        addMessage({text, author:'User'})
        setText('')
    }

    return (
        <form onSubmit={addText}>
            <input 
            type="text"
            value={text} 
            onChange={event => setText(event.target.value)}/>
            <button type="submit">Send</button>
        </form>
    )
}
