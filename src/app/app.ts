import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelpChatComponent } from "./shared/components/help-chat-component/help-chat-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelpChatComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('acuarelasana');

}
