import {Component, Input} from '@angular/core';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'ngx-square-loader',
  templateUrl: './square-loader.component.html',
  styleUrls: ['./square-loader.component.scss']
})
export class SquareLoaderComponent {
  @Input() color = 'rgb(54, 215, 183)';
  @Input() size = 15;
  @Input() sizeUnit = 'px';
  @Input() margin = 2;
  @Input() marginUnit = 'px';

  constructor() {
  }

  createBoxStyle(): Dictionary {
    return {
      'display': 'inline-block',
      'background-color': `${this.color}`,
      'width': `${`${this.size}${this.sizeUnit}`}`,
      'height': `${`${this.size}${this.sizeUnit}`}`,
      'animation': 'loading-square 3s 0s infinite cubic-bezier(.09,.57,.49,.9)',
      'animation-fill-mode': 'both'
    };
  }
}
