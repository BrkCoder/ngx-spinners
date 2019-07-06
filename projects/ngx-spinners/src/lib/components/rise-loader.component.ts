import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'ngx-rise-loader',
  templateUrl: './rise-loader.component.html',
  styleUrls: ['./rise-loader.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class RiseLoaderComponent {
  @Input() color = 'rgb(54, 215, 183)';
  @Input() size = 15;
  @Input() sizeUnit = 'px';
  @Input() margin = 2;
  @Input() marginUnit = 'px';
  constructor() {
  }

  createRiseStyle(index: number): Dictionary {
    return {
      'display': 'inline-block',
      'border-radius': '100%',
      'background-color': `${this.color}`,
      'width': `${`${this.size}${this.sizeUnit}`}`,
      'height': `${`${this.size}${this.sizeUnit}`}`,
      'margin': `${`${this.margin}${this.marginUnit}`}`,
      'animation': `${index % 2 === 0 ? 'loading-even' : 'loading-odd'} 1s 0s infinite cubic-bezier(.15,.46,.9,.6)`,
      'animation-fill-mode': 'both'
    };
  }
}
