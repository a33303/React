import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCpGpJWpfFCAr9lbXx0po7fgIy9_j8xhgE",
  authDomain: "chatreact-9cd6a.firebaseapp.com",
  databaseURL: "https://chatreact-9cd6a-default-rtdb.firebaseio.com",
  projectId: "chatreact-9cd6a",
  storageBucket: "chatreact-9cd6a.appspot.com",
  messagingSenderId: "968973584628",
  appId: "1:968973584628:web:77dbd5cbb34ff60579f6a1"
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(auth, email, password);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(auth, email, password);

export const logOut = async () => await signOut(auth);

export const db = getDatabase(firebase);

export const userRef = ref(db, 'user');
export const chatsRef = ref(db, 'chats');
export const messagesRef = ref(db, 'messages');

export const getChatListById = (id: string) => ref(db, `chats/${id}`);

export const getMessagesRefId = (chatId: string) =>
  ref(db, `messages/${chatId}`);

export const getMessagesListRefId = (chatId: string, msgId: string) =>
  ref(db, `messages/${chatId}/messageList/${msgId}`);
