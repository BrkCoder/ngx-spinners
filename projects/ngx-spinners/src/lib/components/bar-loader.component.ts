import {Component, Input} from '@angular/core';
import {Dictionary} from '../dictionary';
import {calculateRgba} from '../helpers/helpers';

@Component({
  selector: 'ngx-bar-loader',
  templateUrl: './bar-loader.component.html',
  styleUrls: ['./bar-loader.component.scss']
})
export class BarLoaderComponent {
  @Input() color = '#36d7b7';
  @Input() width = 100;
  @Input() widthUnit = 'px';
  @Input() height = 4;
  @Input() heightUnit = 'px';

  constructor() {
  }


  createBarWrapperStyle(): Dictionary {
    return {
      'position': 'relative',
      'width': `${`${this.width}${this.widthUnit}`}`,
      'height': `${`${this.height}${this.heightUnit}`}`,
      'overflow': 'hidden',
      'background-color': `${calculateRgba(this.color, 0.2)}`,
      'background-clip': 'padding-box',
    };
  }

  createBarStyle(index: number) {
    return {
      'display': 'block',
      'position': 'absolute',
      'height': `${`${this.height}${this.heightUnit}`}`,
      'overflow': 'hidden',
      'background-color': `${this.color}`,
      'background-clip': 'padding-box',
      'border-radius': '2px',
      'will-change': 'left, right',
      'animation-fill-mode': 'forwards',
      'animation': `${index === 1 ? 'loading-long' : 'loading-short'} 2.1s ${index === 2 ? '1.15s' : ''}
                    ${index === 1 ? 'cubic-bezier(0.65, 0.815, 0.735, 0.395)' : 'cubic-bezier(0.165, 0.84, 0.44, 1)'} infinite`
    };
  }
}
