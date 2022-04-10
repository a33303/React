import { Dispatch } from "react";
import { AUTHORS } from "../../constants";
import { AddMessage, MessageUser, CreateMessageChat, Message } from './types';

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const CREATE_MESSAGE_CHAT = 'MESSAGES::ADD_MESSAGE_CHAT';
export const DELETE_MESSAGE_CHAT = 'MESSAGES::DELETE_MESSAGE_CHAT';

export const addMessage = (message: MessageUser): AddMessage => ({
  type: ADD_MESSAGE,
  text: message.text,
  author: message.author,
  chatId: message.chatId,
});

export const createMessageChat = (chatId: string): CreateMessageChat => ({
  type: CREATE_MESSAGE_CHAT,
  chatId,
});

export const deleteMessageChat = (chatId: string) => ({
  type: DELETE_MESSAGE_CHAT,
  chatId,
});

let timerId: NodeJS.Timeout;

export const addMessageWithThunk = (message: MessageUser) => (dispatch: Dispatch) => {
  dispatch(addMessage(message));

  if (message.author !== AUTHORS.bot){
    if(timerId){
      clearTimeout(timerId);
    }
    timerId = setTimeout (() => {
        dispatch(
          addMessage({
            chatId: message.chatId,
            text: 'Hello! I\'m systems information',
            author: AUTHORS.bot
          })
        )
    }, 2000);  
  }
};