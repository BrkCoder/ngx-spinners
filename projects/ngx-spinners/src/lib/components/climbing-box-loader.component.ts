import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'ngx-climbing-box-loader',
  templateUrl: './climbing-box-loader.component.html',
  styleUrls: ['./climbing-box-loader.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ClimbingBoxLoaderComponent {
  @Input() color = 'rgb(54, 215, 183)';
  @Input() size = 15;
  @Input() sizeUnit = 'px';

  constructor() {
  }

  createClimbingBoxContainerStyle(): Dictionary {
    return {
      'position': 'relative',
      'width': '7.1em',
      'height': '7.1em'
    };
  }

  createClimbingBoxWrapperStyle(): Dictionary {
    return {
      'position': 'absolute',
      'top': '50%',
      'left': '50%',
      'margin-top': '-2.7em',
      'margin-left': '-2.7em',
      'width': '5.4em',
      'height': '5.4em',
      'font-size': `${`${this.size}${this.sizeUnit}`}`
    };
  }

  createClimbingBoxStyle(): Dictionary {
    return {
      'position': 'absolute',
      'left': '0',
      'bottom': '-0.1em',
      'height': '1em',
      'width': '1em',
      'background-color': 'transparent',
      'border-radius': '15%',
      'border': `0.25em solid ${this.color}`,
      'transform': 'translate(0, -1em) rotate(-45deg)',
      'animation-fill-mode': 'both',
      'animation': 'loading 2.5s infinite cubic-bezier(.79, 0, .47, .97)'
    };
  }

  createHillStyle(): Dictionary {
    return {
      'position': 'absolute',
      'width': '7.1em',
      'height': '7.1em',
      'top': '1.7em',
      'left': '1.7em',
      'border-left': `0.25em solid ${this.color}`,
      'transform': 'rotate(45deg)'
    };
  }
}
