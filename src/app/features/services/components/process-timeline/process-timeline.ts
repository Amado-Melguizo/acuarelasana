import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProcessStep{
  number: number;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-process-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process-timeline.html',
  styleUrl: './process-timeline.scss'
})
export class ProcessTimeline {

  readonly steps: ProcessStep[] = [

    {
      number: 1,
      icon: 'bi-image',
      title: 'Envíame tu fotografía',
      description:
        'Escoge la fotografía que quieras convertir en acuarela y adjúntala en el formulario.'
    },

    {
      number: 2,
      icon: 'bi-chat-dots',
      title: 'Recibe un presupuesto',
      description:
        'Analizaré tu solicitud y te enviaré un presupuesto personalizado sin compromiso.'
    },

    {
      number: 3,
      icon: 'bi-brush',
      title: 'Pinto tu acuarela',
      description:
        'Realizo la obra completamente a mano utilizando acuarela sobre papel de alta calidad.'
    },

    {
      number: 4,
      icon: 'bi-box-seam',
      title: 'La recibes en casa',
      description:
        'Cuando esté terminada la prepararé cuidadosamente para que llegue en perfectas condiciones.'
    }

  ];

}
