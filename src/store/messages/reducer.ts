import {
  ADD_MESSAGE,
  CREATE_MESSAGE_CHAT,
  DELETE_MESSAGE_CHAT,
  SET_MESSAGE_CHAT,
} from './actions';
import { Reducer } from 'redux';
import { nanoid } from 'nanoid';
import { MessagesActions, MessagesState } from './types';
import {SET_CHAT} from "../chatlist/actions";

const initialChatList: MessagesState = {};

export const messagesReducer: Reducer<MessagesState, MessagesActions> = (
  state = initialChatList,
  action
) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.chatId]: [
          ...state[action.chatId],
          {
            id: nanoid(),
            text: action.text,
            author: action.author,
          },
        ],
      };
    }
    case CREATE_MESSAGE_CHAT: {
      return {
        ...state,
        [action.chatId]: [],
      };
    }
    case DELETE_MESSAGE_CHAT: {
      const chats = { ...state };
      delete chats[action.chatId];

      return chats;
    }

    case  SET_MESSAGE_CHAT: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};
