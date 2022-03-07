import React, {useState} from 'react'
import {nanoid} from "nanoid"
import {ListItemButton, ListItemText} from "@mui/material";

export function ChatsList() {
    const [chats, setChats] = useState([
        {id: nanoid(), name: "По интересам"},
        {id: nanoid(), name: "Общий"},
        {id: nanoid(), name: "О Всяком"},
    ])

    return (
        chats.map((i) =>
            <ListItemButton key={i.id}>
                <ListItemText primary={i.name} />
            </ListItemButton>)
    )

}



