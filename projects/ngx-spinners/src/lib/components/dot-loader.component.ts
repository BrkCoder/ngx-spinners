import {Component, Input} from '@angular/core';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'ngx-dot-loader',
  templateUrl: './dot-loader.component.html',
  styleUrls: ['./dot-loader.component.scss']
})
export class DotLoaderComponent {
  @Input() color = 'rgb(54, 215, 183)';
  @Input() size = 60;
  @Input() sizeUnit = 'px';

  constructor() {
  }


  createDotWrapperStyle(): Dictionary {
    return {
      'position': 'relative',
      'width': `${`${this.size}${this.sizeUnit}`}`,
      'height': `${`${this.size}${this.sizeUnit}`}`,
      'animation-fill-mode': 'forwards',
      'animation': 'loading-rotate 2s 0s infinite linear'
    };
  }

  createDotStyle(index: number): Dictionary {
    return {
      'position': 'absolute',
      'top': `${index % 2 ? '0' : 'auto'}`,
      'bottom': `${index % 2 ? 'auto' : '0'}`,
      'height': `${`${this.size / 2}${this.sizeUnit}`}`,
      'width': `${`${this.size / 2}${this.sizeUnit}`}`,
      'background-color': `${this.color}`,
      'border-radius': '100%',
      'animation-fill-mode': 'forwards',
      'animation': `loading-bounce 2s ${index === 2 ? '-1s' : '0s'} infinite linear`
    };
  }
}
