import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

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
];

export const NavBar: React.FC = () => {
    return (
        <ul>
            {navigate.map((i) => {
                return (
                    <li key={i.id}>
                        <NavLink
                            exact
                            key={i.to}>
                            <NavLink exact to={i.to}>
                                {i.name}
                            </NavLink>
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
};

export default withRouter(NavBar);