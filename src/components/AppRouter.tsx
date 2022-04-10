import React from "react";
import { Switch, HashRouter, Route } from "react-router-dom";
import { AboutWithConnect } from "../pages/About";
import { Chats } from "../pages/Chats/Chats";
import { HomePage } from "../pages/HomePage";
import { NotFound } from "../pages/Not Found";
import { Profile } from "../pages/Profile";
import { ChatList } from "./ChatList";
import NavBar from "./NavBar";


export const AppRouter: React.FC = () => (
  <HashRouter>
    <NavBar />
    {/* <Switch> */}
      <Route path="/" component={HomePage} />  
      <Route path="/chats">
        <Route exact path="/chats" component={ChatList} />
        <Route path="/chats/:chatId" component={Chats} />
      </Route>
      <Route exact path="/about" component={AboutWithConnect} />
      <Route exact path="/profile" component={Profile} />
      <Route path="*" component={NotFound} />ƒ
    {/* </Switch>  */}
  </HashRouter>
);

