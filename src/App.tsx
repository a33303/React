import React, { Suspense } from 'react';
import { AppRouter } from './components/AppRouter';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import './components/MessageList.module.css';

export interface Message {
  id: string;
  text: string;
  author: string;
}

export interface Messages {
  [key: string]: Message[];
}

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={<div>Загрузка...</div>}>
          <AppRouter />
        </Suspense>
      </PersistGate>
    </Provider>
  );
};
