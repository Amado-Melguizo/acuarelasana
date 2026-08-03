import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  readonly selectedService = signal<string>('');

  readonly selectedPainting = signal<string>('');

  select(service: string, painting: string) {

    this.selectedService.set(service);
    this.selectedPainting.set(painting);

  }

  clear() {

    this.selectedService.set('');
    this.selectedPainting.set('');

  }

}
