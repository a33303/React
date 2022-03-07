import React, { useState } from "react";
import { nanoid } from "nanoid";
import { ListItemButton, ListItemText } from "@mui/material";

export const ChatsList = () => {
    const [chats, setChats] = useState([
        {id: nanoid(), name: "Interesting"},
        {id: nanoid(), name: "Everything"},
        {id: nanoid(), name: "Countries"},
    ])

    return (
        chats.map((i) =>
            <ListItemButton key={i.id}>
                <ListItemText primary={i.name} />
            </ListItemButton>)
    )
}



