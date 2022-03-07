import React, { useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
import { ThemeContext} from "../utils/ThemeContext";

interface Message {
    text: string;
    author: string;
}

interface FormProps {
    addMessage: (message: Message) => void;
}


export const Form: React.FC <FormProps> = ({ addMessage }) => {
    const {dark, toggleDark} = useContext(ThemeContext);

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (toggleDark) {
            toggleDark();
        }
    };

    const [text, setText] = useState('');

    const addText = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addMessage({
            text,
            author: 'User'
        });
        setText('');
    };

    return (
        <>
            <form onSubmit={addText}>
                <TextField
                    id="outlined-basic"
                    label="Enter to message"
                    variant="outlined"
                    type="text"
                    value={text}
                    autoFocus={true}
                    onChange={(ev) => setText(ev.target.value)}/>
                <Button type="submit">Send</Button>
            </form>
            <h1>{dark ? '🌙' : '🌞'}</h1>
            <Button onClick={handleOnClick}>Change theme</Button>
        </>
    );
};