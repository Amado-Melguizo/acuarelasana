import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import emailjs from '@emailjs/browser';
import { environment } from './environments/environment';

emailjs.init({
  publicKey: environment.emailjs.publicKey
});
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


