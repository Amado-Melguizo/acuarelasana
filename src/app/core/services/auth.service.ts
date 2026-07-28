import { Injectable } from '@angular/core';
import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { auth } from '../config/firebase.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   * Correos permitidos
   */
  private readonly allowedEmails = [
    'amado.melgizo@gmail.com',
    'ana@gmail.com',
    'lunaysar09@outlook.es'
  ];

  async login(): Promise<User> {
    const provider = new GoogleAuthProvider();

    const credential = await signInWithPopup(auth, provider);

    const user = credential.user;

    if (!this.allowedEmails.includes(user.email ?? '')) {
      await signOut(auth);

      throw new Error('No autorizado');
    }

    return user;
  }

  logout(): Promise<void> {
    return signOut(auth);
  }

  currentUser(): User | null {
    return auth.currentUser;
  }

  authState(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
  }
  waitForAuth(): Promise<boolean> {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();

        resolve(!!user);
      });
    });
  }
  isLogged(): boolean {
    return !!auth.currentUser;
  }

  isAdmin(): boolean {
    const email = auth.currentUser?.email ?? '';

    return this.allowedEmails.includes(email);
  }
}
