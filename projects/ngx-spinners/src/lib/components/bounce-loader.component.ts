import {Component, Input} from '@angular/core';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'ngx-bounce-loader',
  templateUrl: './bounce-loader.component.html',
  styleUrls: ['./bounce-loader.component.scss']
})
export class BounceLoaderComponent {
  @Input() color = 'rgb(54, 215, 183)';
  @Input() size = 60;
  @Input() sizeUnit = 'px';

  constructor() {
  }

  createBounceWrapperStyle(): Dictionary {
    return {
      'position': 'relative',
      'width': `${`${this.size}${this.sizeUnit}`}`,
      'height': `${`${this.size}${this.sizeUnit}`}`
    };
  }

  createBounceStyle(index: number): Dictionary {
    return {
      'position': 'absolute',
      'height': `${`${this.size}${this.sizeUnit}`}`,
      'width': `${`${this.size}${this.sizeUnit}`}`,
      'background-color': `${this.color}`,
      'border-radius': '100%',
      'opacity': '0.6',
      'top': '0',
      'left': '0',
      'animation-fill-mode': 'both',
      'animation': `loading-bounce 2.1s ${index === 1 ? '1s' : '0s'} infinite ease-in-out`
    };
  }
}
