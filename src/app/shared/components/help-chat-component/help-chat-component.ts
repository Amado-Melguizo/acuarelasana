import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewChecked,
  inject,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatMessage } from '../../../core/models/chat-message.model';
import { ChatAction, ChatQuestion } from '../../../core/models/chat-question.model';
import { HelpChatService } from '../../../core/services/help-chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './help-chat-component.html',
  styleUrl: './help-chat-component.scss',
})
export class HelpChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesContainer')
  messagesContainer!: ElementRef<HTMLDivElement>;

  opened = false;

  minimized = false;

  writing = false;

  message = '';

  messages: ChatMessage[] = [];

  quickQuestions: ChatQuestion[] = [];

  private idCounter = 1;
  private readonly router: Router = inject(Router);
  private readonly chatService: HelpChatService = inject(HelpChatService);
  private readonly cdr = inject(ChangeDetectorRef);
  constructor() {}

  ngOnInit(): void {
    this.quickQuestions = this.chatService.getQuickQuestions();

    this.messages = this.chatService.loadConversation();

    if (this.messages.length === 0) {
      this.addBotMessage(
        `👋 ¡Hola!

Soy el asistente virtual de Arte Ana M.

Puedes escribir cualquier duda o pulsar una de las preguntas rápidas.

Estaré encantado de ayudarte.`,
      );
    } else {
      this.idCounter = Math.max(...this.messages.map((m) => m.id)) + 1;
    }
  }

  ngAfterViewChecked(): void {
    this.scrollBottom();
  }

  toggleChat(): void {
    this.opened = !this.opened;

    this.minimized = false;
  }

  minimize(): void {
    this.minimized = !this.minimized;
  }
  async sendMessage(): Promise<void> {
    if (this.writing) {
      return;
    }

    const text = this.message.trim();

    if (!text.length) {
      return;
    }

    this.addUserMessage(text);

    this.message = '';

    this.writing = true;

    await this.chatService.botDelay();

    const result = this.chatService.search(text);

    this.writing = false;

    if (!result.found) {
      this.addBotMessage(
        `😔 No he encontrado una respuesta.

Puedes contactar conmigo desde el formulario.`,
        [
          {
            label: '📩 Contactar',
            route: '/contact',
            icon: '📩',
          },
        ],
      );
    } else if (result.suggestions.length === 1) {
      this.addBotMessage(result.bestMatch!.answer, result.bestMatch!.actions);
    } else {
      this.addBotMessage(
        `🤔 He encontrado varias preguntas relacionadas.

Selecciona una de ellas 👇`,
      );

      result.suggestions.forEach((question) => {
        this.addBotMessage(
          `❓ ${question.question}`,

          [
            {
              label: '💬 Ver respuesta',
              icon: '💬',
              question,
            },
          ],
        );
      });
    }

    this.persist();

    this.cdr.detectChanges();
  }
  async selectQuestion(question: ChatQuestion): Promise<void> {
    console.log('Inicio', question.question);

    this.addUserMessage(question.question);

    this.writing = true;

    await this.chatService.botDelay();

    console.log('Fin delay');

    this.writing = false;

    this.addBotMessage(question.answer, question.actions);

    console.log('Mensaje añadido');
    this.persist();

    this.scrollBottom();
  }

  clearConversation(): void {
    this.chatService.clearConversation();

    this.messages = [];

    this.idCounter = 1;

    this.addBotMessage(
      `👋 Nueva conversación iniciada.

¿En qué puedo ayudarte hoy?`,
    );
  }

  contact(): void {
    this.addBotMessage(
      `📩 Puedes utilizar el formulario de contacto.

Ana responderá personalmente lo antes posible.`,
    );
  }

  private addUserMessage(text: string): void {
    this.messages.push({
      id: this.idCounter++,

      sender: 'user',

      text,

      time: this.chatService.getCurrentTime(),
    });

    this.persist();
  }

  private addBotMessage(text: string, actions: ChatAction[] = []): void {
    this.messages.push({
      id: this.idCounter++,
      sender: 'bot',
      text,
      time: this.chatService.getCurrentTime(),
      actions,
    });

    this.persist();

    this.cdr.detectChanges();

    this.scrollBottom();
  }

  private persist(): void {
    this.chatService.saveConversation(this.messages);
  }

  private scrollBottom(): void {
    if (!this.messagesContainer) {
      return;
    }

    const element = this.messagesContainer.nativeElement;

    element.scrollTop = element.scrollHeight;
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();

      this.sendMessage();
    }
  }
  go(route: string) {
    this.router.navigateByUrl(route);
  }
  executeAction(action: ChatAction) {
    if (action.question) {
      this.selectQuestion(action.question);
      this.cdr.detectChanges();
      return;
    }

    if (action.route) {
      this.go(action.route);
    }
  }
}
