import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'ngx-skew-loader',
  templateUrl: './skew-loader.component.html',
  styleUrls: ['./skew-loader.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SkewLoaderComponent {
  @Input() color = 'rgb(54, 215, 183)';
  @Input() size = 15;
  @Input() sizeUnit = 'px';
  constructor() {
  }

  createSkewStyle(): Dictionary {
    return {
      'display': 'inline-block',
      'width': '0',
      'height': '0',
      'border-left': `${`${this.size}${this.sizeUnit}`} solid transparent`,
      'border-right': `${`${this.size}${this.sizeUnit}`} solid transparent`,
      'border-bottom': `${`${this.size}${this.sizeUnit}`} solid ${this.color}`,
      'animation': 'loading 3s 0s infinite cubic-bezier(.09,.57,.49,.9)',
      'animation-fill-mode': 'both'
    };
  }
}
