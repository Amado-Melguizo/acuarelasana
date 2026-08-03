import { ChatAction } from './chat-question.model';

export interface ChatMessage{

    id:number;

    text:string;

    sender:'user'|'bot';

    time:string;

    actions?:ChatAction[];

}
