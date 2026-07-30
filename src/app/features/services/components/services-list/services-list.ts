import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Service } from '../../models/service.model';
import { SERVICES } from '../../data/services.data';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-list.html',
  styleUrl: './services-list.scss'
})
export class ServicesList {

  @Output()
  serviceSelected = new EventEmitter<Service>();

  readonly services = SERVICES;

  selectService(service: Service){

      this.serviceSelected.emit(service);

      setTimeout(()=>{

          document
            .getElementById('request-form')
            ?.scrollIntoView({
                behavior:'smooth',
                block:'start'
            });

      },100);

  }

}
