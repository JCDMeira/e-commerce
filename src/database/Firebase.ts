import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBE_DohGg0IB1SecFwIjdH1MtGUsYEHNKc',
  authDomain: 'eshoop-42d6f.firebaseapp.com',
  projectId: 'eshoop-42d6f',
  storageBucket: 'eshoop-42d6f.appspot.com',
  messagingSenderId: '423322649573',
  appId: '1:423322649573:web:b61a9322ddb30843df250c',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const createUser = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const message = error.message;
      return { errorCode, message };
    });

export const signIn = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const message = error.message;
      return { errorCode, message };
    });
