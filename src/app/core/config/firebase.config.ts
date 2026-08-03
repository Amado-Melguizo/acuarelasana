import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

import { environment } from '../../../environments/environment';

const app = initializeApp(environment.firebase);

export const firestore = getFirestore(app);

export const storage = getStorage(app);

export const auth = getAuth(app);