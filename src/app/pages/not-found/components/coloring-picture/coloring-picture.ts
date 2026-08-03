import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coloring-picture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coloring-picture.html',
  styleUrl: './coloring-picture.scss',
})
export class ColoringPicture implements AfterViewInit {
  selectedColor = '#D97A2B';

  private svgDocument: Document | null = null;
  private svgObject: HTMLObjectElement | null = null;
  readonly colors: string[] = [
    '#FFFFFF',
    '#F7F3E8',
    '#F4E7C6',
    '#E9C46A',
    '#F4A261',
    '#E76F51',
    '#8D5524',
    '#6A994E',
    '#4EA8DE',
    '#5C7AEA',
    '#8E6BBE',
    '#333333',
  ];

  cursorX = 0;
  cursorY = 0;

  brushActive = false;

  brushColor = '#000000';

  ngAfterViewInit(): void {
    this.svgObject = document.getElementById('coloring-svg') as HTMLObjectElement;

    const object = this.svgObject;

    if (!object) {
      return;
    }

    object.addEventListener('load', () => {
      this.svgDocument = object.contentDocument;

      if (!this.svgDocument) {
        return;
      }

      this.initializeColoring();
      this.initializeSvgEvents();
    });
  }
  private initializeColoring(): void {
    if (!this.svgDocument) {
      return;
    }

    const elements = this.svgDocument.querySelectorAll('path, ellipse, circle, polygon, rect');

    elements.forEach((element) => {
      const svgElement = element as SVGElement;

      svgElement.style.cursor = 'none';

      svgElement.addEventListener('mouseenter', () => {
        this.brushColor = this.selectedColor;

        this.brushActive = true;

        this.svgDocument!.documentElement.style.cursor = 'none';
      });

      svgElement.addEventListener('mouseleave', () => {
        this.brushColor = '#000000';
      });

      svgElement.addEventListener('click', () => {
        svgElement.setAttribute('fill', this.selectedColor);

        svgElement.style.fill = this.selectedColor;
      });
      svgElement.addEventListener('mousemove', () => {
        this.brushColor = this.selectedColor;
      });
    });
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  clear(): void {
    if (!this.svgObject) {
      return;
    }

    // Recarga el SVG original
    const currentSrc = this.svgObject.data;

    this.svgObject.data = '';

    setTimeout(() => {
      this.svgObject!.data = currentSrc;

      this.svgObject!.addEventListener(
        'load',
        () => {
          this.svgDocument = this.svgObject!.contentDocument;

          if (!this.svgDocument) {
            return;
          }

          this.initializeColoring();
          this.initializeSvgEvents();
        },
        { once: true },
      );
    }, 50);
  }

  enableBrush(): void {
    this.brushActive = true;
  }

  disableBrush(): void {
    this.brushActive = false;

    this.brushColor = '#000000';
  }

  moveBrush(event: MouseEvent): void {
    this.cursorX = event.clientX + 12;

    this.cursorY = event.clientY + 12;
  }
  private initializeSvgEvents(): void {
    if (!this.svgDocument) {
      return;
    }

    const svg = this.svgDocument.documentElement;

    svg.addEventListener('mousemove', (event: MouseEvent) => {
      const rect = (
        document.getElementById('coloring-svg') as HTMLObjectElement
      ).getBoundingClientRect();

      this.cursorX = rect.left + event.clientX + 10;

      this.cursorY = rect.top + event.clientY + 10;
    });
  }
}
