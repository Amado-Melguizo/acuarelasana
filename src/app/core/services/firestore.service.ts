import { Injectable, NgZone, inject } from '@angular/core';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';

import { firestore } from '../config/firebase.config';
import { Artwork } from '../models/artwork.model';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private readonly collectionName = 'artworks';
private readonly zone = inject(NgZone);
  /**
   * Escucha todas las obras en tiempo real
   */
  getArtworks(callback: (artworks: Artwork[]) => void): () => void {
    const collectionRef = collection(firestore, this.collectionName);

    return onSnapshot(collectionRef, snapshot => {

    const artworks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Artwork)
    }));

    this.zone.run(() => {

        callback(artworks);

    });

});
  }

  /**
   * Obtener una obra
   */
  async getArtwork(id: string): Promise<Artwork | null> {
    const snapshot = await getDoc(doc(firestore, this.collectionName, id));

    if (!snapshot.exists()) {
      return null;
    }

    return {
      id: snapshot.id,
      ...(snapshot.data() as Artwork),
    };
  }

  /**
   * Crear una obra
   */
  async createArtwork(artwork: Artwork): Promise<string> {
    const docRef = await addDoc(
      collection(firestore, this.collectionName),
      artwork as DocumentData,
    );

    return docRef.id;
  }

  /**
   * Actualizar
   */
  async updateArtwork(id: string, artwork: Partial<Artwork>): Promise<void> {
    await updateDoc(doc(firestore, this.collectionName, id), artwork as DocumentData);
  }

  /**
   * Eliminar
   */
  async deleteArtwork(id: string): Promise<void> {
    await deleteDoc(doc(firestore, this.collectionName, id));
  }
}
