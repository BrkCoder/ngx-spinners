import {Component, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'ngx-pacman-loader',
  templateUrl: './pacman-loader.component.html',
  styleUrls: ['./pacman-loader.component.scss']
})
export class PacmanLoaderComponent implements OnChanges {
  @Input() color = 'rgb(54, 215, 183)';
  @Input() size = 25;
  @Input() sizeUnit = 'px';
  @Input() margin = 2;
  @Input() marginUnit = 'px';

  constructor(private elementRef: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {size, sizeUnit} = changes;
    if (size && !isNaN(size.currentValue) && sizeUnit && typeof sizeUnit.currentValue === 'string') {
      this.elementRef.nativeElement.style.setProperty('--tx', `${`${-4 * size.currentValue}${sizeUnit.currentValue}`}`);
      this.elementRef.nativeElement.style.setProperty('--ty', `${`${(-1 * size.currentValue) / 4}${sizeUnit.currentValue}`}`);
    }
  }

  createPacmanWrapperStyle(): Dictionary {
    return {
      'position': 'relative',
      'font-size': '0',
      'height': `${`${this.size}${this.sizeUnit}`}`,
      'width': `${`${this.size}${this.sizeUnit}`}`
    };
  }

  createPacStyle(): Dictionary {
    return this.createPacManStyle(0);
  }

  createManStyle(): Dictionary {
    return this.createPacManStyle(1);
  }

  createBallStyle(index: number): Dictionary {
    return {
      'width': `${`${this.size / 3}${this.sizeUnit}`}`,
      'height': `${`${this.size / 3}${this.sizeUnit}`}`,
      'background-color': `${this.color}`,
      'margin': `${`${this.margin}${this.marginUnit}`}`,
      'border-radius': '100%',
      'transform': `translate(0, ${`${-this.size / 4}${this.sizeUnit}`})`,
      'position': 'absolute',
      'top': `${this.size}px`,
      'left': `${`${this.size * 4}${this.sizeUnit}`}`,
      'animation': `loading-ball 1s ${index * 0.25}s infinite linear`,
      'animation-fill-mode': 'both'
    };
  }

  private createPacManStyle(index: number): Dictionary {
    const s1 = this.s1();
    const s2 = this.s2();
    return {
      'width': '0',
      'height': '0',
      'border-right': `${s1}`,
      'border-top': `${index === 0 ? s1 : s2}`,
      'border-left': `${s2}`,
      'border-bottom': `${index === 0 ? s2 : s1}`,
      'border-radius': `${`${this.size}${this.sizeUnit}`}`,
      'position': 'absolute',
      'animation': `${'loading-pacman-' + index} 0.8s infinite ease-in-out`,
      'animation-fill-mode': 'both'
    };
  }

  private s1(): string {
    return `${this.size}${this.sizeUnit} solid transparent`;
  }

  private s2(): string {
    return `${this.size}${this.sizeUnit} solid ${this.color}`;
  }
}
