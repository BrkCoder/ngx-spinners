import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'ngx-rotate-loader',
  templateUrl: './rotate-loader.component.html',
  styleUrls: ['./rotate-loader.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class RotateLoaderComponent {
  @Input() color = 'rgb(54, 215, 183)';
  @Input() size = 15;
  @Input() sizeUnit = 'px';
  @Input() margin = 2;
  @Input() marginUnit = 'px';
  constructor() {
  }

  createRotateWrapperStyle(): Dictionary {
    return {
      'display': 'inline-block',
      ...this.createBallStyle(),
      'position': 'relative',
      'animation-fill-mode': 'both',
      'animation': 'loading-rotate 1s 0s infinite cubic-bezier(.7,-.13,.22,.86)'
    };
  }

  createRotateLongStyle(): Dictionary {
    return {
      ...this.createBallStyle(),
      ...this.createPositionStyle(1)
    };
  }

  createRotateShortStyle(): Dictionary {
    return {
      ...this.createBallStyle(),
      ...this.createPositionStyle(2)
    };
  }

  private createBallStyle(): Dictionary {
      return {
        'background-color': `${this.color}`,
        'width': `${`${this.size}${this.sizeUnit}`}`,
        'height': `${`${this.size}${this.sizeUnit}`}`,
        'margin': `${`${this.margin}${this.marginUnit}`}`,
        'border-radius': '100%'
        };
  }

  private createPositionStyle(index: number): Dictionary {
    return {
      'opacity': '0.8',
      'position': 'absolute',
      'top': '0',
      'left': `${index % 2 ? -28 : 25}px`
    };
  }
}
