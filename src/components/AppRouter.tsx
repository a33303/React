import React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import { AboutWithConnect } from '../pages/About';
import { Chats } from '../pages/Chats/Chats';
import { HomePage } from '../pages/HomePage';
import { NotFound } from '../pages/Not Found';
import { Profile } from '../pages/Profile';
import { ChatList } from './ChatList';
import NavBar from './NavBar';
import { Articles } from '../pages/Articles';
import { Blogs } from '../pages/Blogs';
import { SignIn } from '../pages/Signin';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const AppRouter: React.FC = () => (
  <HashRouter>
    <NavBar />
    <Switch>
      <PublicRoute restricted={true} exact path="/" component={HomePage} />
      <PrivateRoute path="/chats">
        <Route exact path="/chats" component={ChatList} />
        <Route path="/chats/:chatId" component={Chats} />
      </PrivateRoute>
      <PublicRoute
        restricted={false}
        exact
        path="/about"
        component={AboutWithConnect}
      />
      <PublicRoute
        restricted={false}
        exact
        path="/profile"
        component={Profile}
      />
      <PublicRoute
        restricted={false}
        exact
        path="/articles"
        component={Articles}
      />
      <PublicRoute restricted={false} exact path="/blogs" component={Blogs} />
      <PublicRoute restricted={true} exact path="/login" component={SignIn} />
      <Route path="*" component={NotFound} />ƒ
    </Switch>
  </HashRouter>
);
