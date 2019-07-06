import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'ngx-scale-loader',
  templateUrl: './scale-loader.component.html',
  styleUrls: ['./scale-loader.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ScaleLoaderComponent {
  @Input() color = 'rgb(54, 215, 183)';
  @Input() width = 4;
  @Input() widthUnit = 'px';
  @Input() height = 35;
  @Input() heightUnit = 'px';
  @Input() margin = 2;
  @Input() marginUnit = 'px';
  @Input() radius = 2;
  @Input() radiusUnit = 'px';
  constructor() {
  }

  createScaleStyle(index: number): Dictionary {
    return {
      'display': 'inline-block',
      'background-color': `${this.color}`,
      'width': `${`${this.width}${this.widthUnit}`}`,
      'height': `${`${this.height}${this.heightUnit}`}`,
      'margin': `${`${this.margin}${this.marginUnit}`}`,
      'border-radius': `${`${this.radius}${this.radiusUnit}`}`,
      'animation': `loading 1s ${index * 0.1}s infinite cubic-bezier(.2,.68,.18,1.08)`,
      'animation-fill-mode': 'both'
    };
  }
}
