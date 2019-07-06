import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'ngx-pulse-loader',
  templateUrl: './pulse-loader.component.html',
  styleUrls: ['./pulse-loader.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PulseLoaderComponent {
  @Input() color = 'rgb(54, 215, 183)';
  @Input() size = 15;
  @Input() sizeUnit = 'px';
  @Input() margin = 2;
  @Input() marginUnit = 'px';

  constructor() {
  }

  createPulseStyle(index: number): Dictionary {
    return {
      'display': 'inline-block',
      'background-color': `${this.color}`,
      'width': `${`${this.size}${this.sizeUnit}`}`,
      'height': `${`${this.size}${this.sizeUnit}`}`,
      'margin': `${`${this.margin}${this.marginUnit}`}`,
      'border-radius': '100%',
      'animation': `loading 0.75s ${index * 0.12}s infinite cubic-bezier(.2,.68,.18,1.08)`,
      'animation-fill-mode': 'both'
    };
  }
}
