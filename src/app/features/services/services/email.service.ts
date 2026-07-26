import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  send(templateParams: Record<string, unknown>) {
    return emailjs.send(
      environment.emailjs.serviceId,
      environment.emailjs.templateId,
      templateParams,
      environment.emailjs.publicKey,
    );
  }
}
