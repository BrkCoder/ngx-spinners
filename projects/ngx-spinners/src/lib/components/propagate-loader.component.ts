import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'ngx-propagate-loader',
  templateUrl: './propagate-loader.component.html',
  styleUrls: ['./propagate-loader.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PropagateLoaderComponent {
  @Input() color = 'rgb(54, 215, 183)';
  @Input() size = 15;
  @Input() sizeUnit = 'px';

  constructor() {
  }

  createPropagateWrapperStyle(): Dictionary {
    return {
      'position': 'relative'
    };
  }

  createPropagateStyle(index: number): Dictionary {
    return {
      'position': 'absolute',
      'font-size': `${`${this.size / 3}${this.sizeUnit}`}`,
      'width': `${`${this.size}${this.sizeUnit}`}`,
      'height': `${`${this.size}${this.sizeUnit}`}`,
      'background': `${this.color}`,
      'border-radius': '50%',
      'animation': `${'loading-' + index} 1.5s  infinite`,
      'animation-fill-mode': 'forwards'
    };
  }
}
