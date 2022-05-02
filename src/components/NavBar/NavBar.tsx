import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import styles from "./NavBar.module.css";

const navigate = [
  {
    id: 1,
    to: '/',
    name: 'Главная',
  },
  {
    id: 2,
    to: '/chats',
    name: 'Чаты',
  },
  {
    id: 3,
    to: '/about',
    name: 'О нас',
  },
  {
    id: 4,
    to: '/profile',
    name: 'Профиль',
  },
  {
    id: 5,
    to: '/articles',
    name: 'Cтатьи',
  },
  {
    id: 6,
    to: '/blogs',
    name: 'Блоги',
  },
];

// const menuNavBar = {
//   width: '30%',
//   display: 'flex',
//   float: 'left',
// };

export const NavBar: React.FC = () => {
  return (
    <div className={styles.menu} >
      <MenuList>
        {navigate.map((link) => {
          return (
            <MenuItem key={link.id}>
              <NavLink exact to={link.to} >
                 {link.name}
              </NavLink>
            </MenuItem>
          );
        })}
      </MenuList>
    </div>
  );
};

export default withRouter(NavBar);
