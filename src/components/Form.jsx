import React, { useState } from "react"
import {Button, TextField } from "@mui/material"


export function Form ({ addMessage }) {
    const [text, setText] = useState('')

    const addText = (event) => {
        event.preventDefault()
        addMessage({text, author:'User'})
        setText('')
    }

    return (
        <form onSubmit={addText}>
            <TextField
            id="outlined-basic"
            label="Enter to message"
            variant="outlined"
            type="text"
            value={text}
            autoFocus={true}
            onChange={event => setText(event.target.value)}/>
            <Button type="submit">Send</Button>
        </form>
    )
}
