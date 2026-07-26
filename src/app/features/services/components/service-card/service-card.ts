import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss'
})
export class ServiceCard {

  @Input({ required: true })
  service!: Service;

  @Output()
  request = new EventEmitter<Service>();

  selectService(): void {
    this.request.emit(this.service);
  }

}
