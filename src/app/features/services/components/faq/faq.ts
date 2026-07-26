import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqI {

  question: string;

  answer: string;

  open?: boolean;

}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class Faq {

  readonly questions: FaqI[] = [

    {
      question: '¿Cómo realizo un encargo?',
      answer:
        'Solo tienes que rellenar el formulario indicando la idea de tu obra. Me pondré en contacto contigo para concretar todos los detalles.',
      open: true
    },

    {
      question: '¿Puedo enviar una fotografía como referencia?',
      answer:
        'Sí. Puedes explicar en el formulario que deseas utilizar una fotografía. Posteriormente podrás enviarla cuando contactemos.'
    },

    {
      question: '¿Los cuadros son completamente personalizados?',
      answer:
        'Sí. Cada obra se realiza desde cero y adaptada a las preferencias del cliente.'
    },

    {
      question: '¿Cuánto tarda un pedido?',
      answer:
        'Depende del tamaño y la complejidad de la obra. Normalmente entre una y tres semanas.'
    },

    {
      question: '¿Qué técnicas utilizas?',
      answer:
        'Principalmente acuarela y carboncillo, aunque cada obra puede adaptarse según el proyecto.'
    },

    {
      question: '¿Realizas envíos?',
      answer:
        'Sí. Una vez terminada la obra se prepara cuidadosamente para su envío.'
    },

    {
      question: '¿Cómo se establece el precio?',
      answer:
        'El presupuesto depende del tamaño, la dificultad, el número de elementos y el tiempo estimado de realización.'
    },

    {
      question: '¿Puedo solicitar cambios durante el proceso?',
      answer:
        'Sí. Siempre que sea posible se podrán realizar pequeños ajustes antes de finalizar la obra.'
    }

  ];

  toggle(item: FaqI) {

    item.open = !item.open;

  }

}
