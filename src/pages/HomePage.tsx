import React from "react"
import {Button, TextField} from "@mui/material"

export function HomePage() {
    return (
        <>
            <h1>Hello main page!</h1>
            <TextField
                id="outlined-basic"
                label="Enter to Nickname"
                variant="outlined"
                type="text"
                autoFocus={true}
            />
            <Button type="submit">Вход</Button>
        </>
    )
}