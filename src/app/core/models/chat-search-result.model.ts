import { ChatQuestion } from './chat-question.model';

export interface ChatSearchResult {

  found: boolean;

  bestMatch?: ChatQuestion;

  suggestions: ChatQuestion[];

}
