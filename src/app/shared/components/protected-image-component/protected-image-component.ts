import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-protected-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './protected-image-component.html',
  styleUrl: './protected-image-component.scss',
})
export class ProtectedImageComponent implements AfterViewInit, OnChanges {
  @Input() src!: string;
  @Input() alt = '';
  @Input() watermark = '© Ana M.';

  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.drawImage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['src'] && this.ctx) {
      this.drawImage();
    }
  }

  private drawImage(): void {
    if (!this.src) return;

    const image = new Image();

    image.crossOrigin = 'anonymous';

    image.onload = () => {
      const canvas = this.canvas.nativeElement;

      const ratio = image.width / image.height;

      const width = canvas.parentElement!.clientWidth;

      const height = width / ratio;

      canvas.width = width;
      canvas.height = height;

      this.ctx.clearRect(0, 0, width, height);

      this.ctx.drawImage(image, 0, 0, width, height);

      this.drawWatermark(width, height);
    };

    image.src = this.src;
  }

  private drawWatermark(width: number, height: number): void {
    this.ctx.save();

    this.ctx.globalAlpha = 0.12;

    this.ctx.fillStyle = '#ffffff';

    this.ctx.font = 'bold 28px Arial';

    this.ctx.translate(width / 2, height / 2);

    this.ctx.rotate(-0.4);

    for (let y = -height; y < height; y += 120) {
      for (let x = -width; x < width; x += 260) {
        this.ctx.fillText(this.watermark, x, y);
      }
    }

    this.ctx.restore();
  }

  prevent(event: Event): void {
    event.preventDefault();
  }

  @HostListener('document:keydown', ['$event'])
  blockShortcuts(event: KeyboardEvent): void {
    const key = event.key.toLowerCase();

    if (
      event.key === 'F12' ||
      (event.ctrlKey && ['s', 'u', 'p'].includes(key)) ||
      (event.ctrlKey && event.shiftKey && ['i', 'j', 'c'].includes(key))
    ) {
      event.preventDefault();
    }
  }
}
