import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { profileReducer, ProfileState } from './profile/reducer';
import { chatListReducer } from './chatlist/reducer';
import { messagesReducer } from './messages/reducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import { Chat } from './chatlist/types';
import { MessagesState } from './messages/types';
import { articlesReducer, ArticlesState } from './articles/reducer';
import { blogsReducer, BlogsState } from './blogs/reducer';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
  profile: ProfileState;
  chatlist: Chat[];
  messages: MessagesState;
  articles: ArticlesState;
  blogs: BlogsState;
}

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['articles'],
};

const rootReducer = combineReducers({
  articles: articlesReducer,
  blogs: blogsReducer,
  messages: messagesReducer,
  profile: profileReducer,
  chatlist: chatListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
