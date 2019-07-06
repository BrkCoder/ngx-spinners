import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'ngx-circle-loader',
  templateUrl: './circle-loader.component.html',
  styleUrls: ['./circle-loader.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CircleLoaderComponent {
  @Input() color = 'rgb(54, 215, 183)';
  @Input() size = 50;
  @Input() sizeUnit = 'px';

  constructor() {
  }

  createCircleWrapperStyle(): Dictionary {
    return {
      'position': 'relative',
      'width': `${`${this.size}${this.sizeUnit}`}`,
      'height': `${`${this.size}${this.sizeUnit}`}`
    };
  }

  createCircleStyle(index: number): Dictionary {
    return {
      'position': 'absolute',
      'height': `${`${this.size * (1 - (index / 10))}${this.sizeUnit}`}`,
      'width': `${`${this.size * (1 - (index / 10))}${this.sizeUnit}`}`,
      'border': `1px solid ${this.color}`,
      'border-radius': '100%',
      'transition': '2s',
      'border-bottom': 'none',
      'border-right': 'none',
      'top': `${(index * 0.7 * 2.5)}%`,
      'left': `${(index * 0.35 * 2.5)}%`,
      'animation-fill-mode': '',
      'animation': `loading 1s ${index * 0.2}s infinite linear`
    };
  }
}
