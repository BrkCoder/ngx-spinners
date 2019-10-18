import {Component, ElementRef, Input} from '@angular/core';
import {Dictionary} from '../dictionary';
import {calculateRgba} from '../helpers/helpers';

@Component({
  selector: 'ngx-hash-loader',
  templateUrl: './hash-loader.component.html',
  styleUrls: ['./hash-loader.component.scss']
})
export class HashLoaderComponent {
  @Input() color = '#36d7b7';
  @Input() size = 50;
  @Input() sizeUnit = 'px';

  constructor(private elementRef: ElementRef) {
  }

  createHashWrapperStyle(): Dictionary {
    return {
      'position': 'relative',
      'width': `${`${this.size}${this.sizeUnit}`}`,
      'height': `${`${this.size}${this.sizeUnit}`}`,
      'transform': 'rotate(165deg)'
    };
  }

  createHashStyle(index: number, color: string, size: number, sizeUnit: string): Dictionary {
    this.setStyleVariables(color, size, sizeUnit);
    return {
      'display': 'block',
      'position': 'absolute',
      'content': '',
      'top': '50%',
      'left': '50%',
      'width': `${`${this.size / 5}${this.sizeUnit}`}`,
      'height': `${`${this.size / 5}${this.sizeUnit}`}`,
      'border-radius': `${`${this.size / 10}${this.sizeUnit}`}`,
      'transform': 'translate(-50%, -50%)',
      'animation-fill-mode': 'none',
      'animation': `${index === 1 ? 'loading-hash-before' : 'loading-hash-after'} 2s infinite`
    };
  }

  private rgba = (color: string): string => calculateRgba(color, 0.75);
  private thickness = (size: number): number => size / 5;

  private lat(size: number): number {
    return (this.size - this.thickness(size)) / 2;
  }

  private offset(size: number): number {
    return this.lat(size) - this.thickness(size);
  }

  private setStyleVariables(color: string, size: number, sizeUnit: string): void {
    const rgba = this.rgba(color);
    const lat = this.lat(size);
    const thickness = this.thickness(size);
    const offset = this.offset(size);
    this.elementRef.nativeElement.style.setProperty('--color', rgba);
    this.elementRef.nativeElement.style.setProperty('--size', `${`${size}${sizeUnit}`}`);
    this.elementRef.nativeElement.style.setProperty('--lat', `${`${lat}px`}`);
    this.elementRef.nativeElement.style.setProperty('--thickness', `${`${thickness}px`}`);
    this.elementRef.nativeElement.style.setProperty('--offset', `${`${offset}px`}`);
  }

}
