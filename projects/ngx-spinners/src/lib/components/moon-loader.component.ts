import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'ngx-moon-loader',
  templateUrl: './moon-loader.component.html',
  styleUrls: ['./moon-loader.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MoonLoaderComponent {
  @Input() color = 'rgb(54, 215, 183)';
  @Input() size = 60;
  @Input() sizeUnit = 'px';

  constructor() {
  }

  createMoonWrapperStyle(): Dictionary {
    return {
      'position': 'relative',
      'width': `${`${this.size + ((this.size / 7) * 2)}${this.sizeUnit}`}`,
      'height': `${`${this.size + ((this.size / 7) * 2)}${this.sizeUnit}`}`,
      'animation': 'loading 0.6s 0s infinite linear',
      'animation-fill-mode': 'forwards'
    };
  }

  createMoonBallStyle(): Dictionary {
    return {
      ...this.createBallStyle(this.size / 7),
      'background-color': `${this.color}`,
      'opacity': '0.8',
      'position': 'absolute',
      'top': `${`${(this.size / 2) - (this.size / 14)}${this.sizeUnit}`}`,
      'animation': 'loading 0.6s 0s infinite linear',
      'animation-fill-mode': 'forwards'
    };
  }

  createMoonCircleStyle(): Dictionary {
    return {
      ...this.createBallStyle(this.size),
      'border': `${this.size / 7}px solid ${this.color}`,
      'opacity': '0.1'
    };
  }

  private createBallStyle(size: number): Dictionary {
    return {
      'width': `${`${size}${this.sizeUnit}`}`,
      'height': `${`${size}${this.sizeUnit}`}`,
      'border-radius': '100%'
    };
  }
}
