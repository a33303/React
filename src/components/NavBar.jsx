import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import {ListItemText} from "@mui/material"

const navigate = [
    {
        id: 1,
        to: '/',
        name: 'HomePage'
    },
    {
        id: 2,
        to: '/chats',
        name: 'Chats'
    },
    {
        id: 3,
        to: '/about',
        name: 'About'
    },
    {
        id: 4,
        to: '/profile',
        name: 'Profile'
    }
]

export function NavBar() {
    return (
        <ul>
            {navigate.map((i) => {
                return (
                    <ListItemText key={i.id}>
                        <NavLink exact to={i.to}>
                            {i.name}
                        </NavLink>
                    </ListItemText>
                )
            })}
        </ul>
    )
}

export default withRouter(NavBar)