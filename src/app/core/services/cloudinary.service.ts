import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CloudinaryService {

  async uploadImage(file: File): Promise<any> {

    const formData = new FormData();

    formData.append('file', file);
    formData.append(
      'upload_preset',
      environment.cloudinary.uploadPreset
    );

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${environment.cloudinary.cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error('Error subiendo la imagen');
    }

    return response.json();
  }
}