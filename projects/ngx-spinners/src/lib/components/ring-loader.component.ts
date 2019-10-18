import {Component, Input} from '@angular/core';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'ngx-ring-loader',
  templateUrl: './ring-loader.component.html',
  styleUrls: ['./ring-loader.component.scss']
})
export class RingLoaderComponent {
  @Input() color = 'rgb(54, 215, 183)';
  @Input() size = 60;
  @Input() sizeUnit = 'px';

  constructor() {
  }

  createRingWrapperStyle(): Dictionary {
    return {
      'width': `${`${this.size}${this.sizeUnit}`}`,
      'height': `${`${this.size}${this.sizeUnit}`}`,
      'position': 'relative'
    };
  }

  createRingStyle(index: number): Dictionary {
    return {
      'position': 'absolute',
      'top': '0',
      'left': '0',
      'width': `${`${this.size}${this.sizeUnit}`}`,
      'height': `${`${this.size}${this.sizeUnit}`}`,
      'border': `${`${this.size / 10}${this.sizeUnit}`} solid ${this.color}`,
      'opacity': '0.4',
      'border-radius': '100%',
      'animation-fill-mode': 'forwards',
      'perspective': '800px',
      'animation': `${index === 1 ? 'loading-ring-right' : 'loading-ring-left'} 2s 0s infinite linear`
    };
  }
}
