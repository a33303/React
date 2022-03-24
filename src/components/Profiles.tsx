import React from 'react';
import {Button, TextField} from "@mui/material";


export const Profile: React.FC = () => {
    return (
            <form action="">
                <h1>Profile</h1>
                <TextField
                    id="outlined-basic"
                    label="Nick name"
                    variant="outlined"
                    type="text"
                />
                <TextField
                    id="outlined-basic"
                    label="E-mail"
                    variant="outlined"
                    type="text"
                />
                <TextField
                    id="outlined-basic"
                    label="Age"
                    variant="outlined"
                    type="text"
                />
                <Button type="submit">Accept</Button>
            </form>
    )
}