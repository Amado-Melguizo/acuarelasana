import { Component, input, signal, effect } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.html',
  styleUrl: './preloader.scss'
})
export class Preloader {

  loaded = input(false);

  finished = signal(false);

  constructor() {

    effect(() => {

      if (!this.loaded()) {
        return;
      }

      setTimeout(() => {
        this.finished.set(true);
      }, 900);

    });

  }

}
