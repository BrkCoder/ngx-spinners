import {Component, Input} from '@angular/core';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'ngx-grid-loader',
  templateUrl: './grid-loader.component.html',
  styleUrls: ['./grid-loader.component.scss']
})
export class GridLoaderComponent {
  @Input() color = 'rgb(54, 215, 183)';
  @Input() size = 15;
  @Input() sizeUnit = 'px';
  @Input() margin = 2;
  @Input() marginUnit = 'px';

  constructor() {
  }

  createGridWrapperStyle(): Dictionary {
    return {
      'width': `${`${(this.size * 3) + (this.margin * 6)}${this.sizeUnit}`}`,
      'font-size': '0'
    };
  }

  createGridStyle(rand: number): Dictionary {
    return {
      'display': 'inline-block',
      'background-color': `${this.color}`,
      'width': `${`${this.size}${this.sizeUnit}`}`,
      'height': `${`${this.size}${this.sizeUnit}`}`,
      'margin': `${`${this.margin}${this.marginUnit}`}`,
      'border-radius': '100%',
      'animation-fill-mode': 'both',
      'animation': `loading-grid ${(rand / 100) + 0.6}s ${(rand / 100) - 0.2}s infinite ease`
    };
  }

  random(top: number) {
    return Math.random() * top;
  }
}
