import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'ngx-clip-loader',
  templateUrl: './clip-loader.component.html',
  styleUrls: ['./clip-loader.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ClipLoaderComponent {
  @Input() color = 'rgb(54, 215, 183)';
  @Input() size = 35;
  @Input() sizeUnit = 'px';

  constructor() {
  }

  createClipStyle(): Dictionary {
    return {
      'background': 'transparent !important',
      'width': `${`${this.size}${this.sizeUnit}`}`,
      'height': `${`${this.size}${this.sizeUnit}`}`,
      'border-radius': '100%',
      'border': '2px solid',
      'border-color': `${this.color}`,
      'border-bottom-color': 'transparent',
      'display': 'inline-block',
      'animation': ' loading 0.75s 0s infinite linear',
      'animation-fill-mode': 'both'
    };
  }
}
