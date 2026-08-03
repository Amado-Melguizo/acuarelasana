import { Injectable } from '@angular/core';

import { CHAT_KNOWLEDGE } from '../../../assets/data/chat-knowledge.data';

import { ChatMessage } from '../models/chat-message.model';
import { ChatQuestion } from '../models/chat-question.model';
import { ChatSearchResult } from '../models/chat-search-result.model';

@Injectable({
  providedIn: 'root',
})
export class HelpChatService {
  private readonly STORAGE_KEY = 'arte-ana-chat';

  /**
   * Diccionario de sinónimos
   */
  private readonly synonyms: Record<string, string[]> = {
    perro: ['perrito', 'can', 'cachorro'],

    gato: ['gatito', 'felino'],

    mascota: ['animal', 'mascotas'],

    regalo: ['regalar', 'detalle', 'obsequio', 'sorpresa'],

    comprar: ['pedido', 'pedir', 'encargar', 'solicitar', 'comprar'],

    fotografia: ['foto', 'imagen'],

    cuadro: ['acuarela', 'obra', 'ilustracion', 'pintura'],

    precio: ['coste', 'vale', 'presupuesto', 'importe'],

    envio: ['mandar', 'correo', 'mensajeria', 'transportista'],
  };

  /**
   * Preguntas rápidas
   */
  getQuickQuestions(): ChatQuestion[] {
    return CHAT_KNOWLEDGE;
  }

  /**
   * Búsqueda inteligente
   */
  search(text: string): ChatSearchResult {
    const normalized = this.expandSynonyms(this.normalize(text));

    const words = this.extractWords(normalized);

    const results: {
      question: ChatQuestion;
      score: number;
    }[] = [];

    for (const item of CHAT_KNOWLEDGE) {
      const score = this.calculateScore(item, normalized, words);

      if (score > 0) {
        results.push({
          question: item,

          score,
        });
      }
    }

    results.sort((a, b) => b.score - a.score);

    if (!results.length) {
      return {
        found: false,

        suggestions: [],
      };
    }

    const best = results[0];

    const suggestions = results.filter((result) => {
      return best.score - result.score <= 20;
    });

    return {
      found: true,

      bestMatch: best.question,

      suggestions: suggestions.slice(0, 3).map((result) => result.question),
    };
  }

  saveConversation(messages: ChatMessage[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(messages));
  }

  loadConversation(): ChatMessage[] {
    const data = localStorage.getItem(this.STORAGE_KEY);

    if (!data) {
      return [];
    }

    try {
      return JSON.parse(data);
    } catch {
      return [];
    }
  }

  clearConversation(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  getCurrentTime(): string {
    return new Date().toLocaleTimeString('es-ES', {
      hour: '2-digit',

      minute: '2-digit',
    });
  }

  botDelay(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, 2500);
    });
  }
  /**
   * Calcula la puntuación de una pregunta.
   */
  private calculateScore(question: ChatQuestion, message: string, words: string[]): number {
    let score = 0;

    for (const keyword of question.keywords) {
      const normalizedKeyword = this.normalize(keyword);

      // Coincidencia exacta dentro de la frase
      if (message.includes(normalizedKeyword)) {
        score += normalizedKeyword.length * 5;
      }

      for (const word of words) {
        // Palabra exacta
        if (word === normalizedKeyword) {
          score += 30;
        }

        // Plural o prefijo
        else if (word.startsWith(normalizedKeyword) || normalizedKeyword.startsWith(word)) {
          score += 20;
        }

        // Muy parecidas
        else if (this.areSimilar(word, normalizedKeyword)) {
          score += 10;
        }
      }
    }

    return score;
  }

  /**
   * Añade palabras equivalentes al texto.
   */
  private expandSynonyms(text: string): string {
    let result = text;

    for (const key in this.synonyms) {
      for (const synonym of this.synonyms[key]) {
        if (result.includes(synonym)) {
          result += ' ' + key;
        }
      }
    }

    return result;
  }

  /**
   * Divide la frase en palabras.
   */
  private extractWords(text: string): string[] {
    const stopWords = [
      'de',
      'del',
      'la',
      'las',
      'el',
      'los',

      'un',
      'una',
      'unos',
      'unas',

      'para',
      'por',
      'con',
      'sin',

      'que',
      'como',
      'cuando',
      'donde',

      'quiero',
      'necesito',
      'puedo',
      'podria',

      'me',
      'mi',
      'mis',

      'es',
      'hay',
      'hacer',
      'ser',
    ];

    return text

      .split(/\s+/)

      .map((word) => word.trim())

      .filter((word) => word.length > 2)

      .filter((word) => !stopWords.includes(word));
  }

  /**
   * Comprueba si dos palabras son similares.
   */
  private areSimilar(a: string, b: string): boolean {
    if (Math.abs(a.length - b.length) > 2) {
      return false;
    }

    let matches = 0;

    const min = Math.min(a.length, b.length);

    for (let i = 0; i < min; i++) {
      if (a[i] === b[i]) {
        matches++;
      }
    }

    return matches >= min * 0.7;
  }

  /**
   * Normaliza el texto.
   */
  private normalize(text: string): string {
    return text

      .toLowerCase()

      .normalize('NFD')

      .replace(/[\u0300-\u036f]/g, '')

      .replace(/[¿?¡!.,;:()]/g, '')

      .trim();
  }
}
