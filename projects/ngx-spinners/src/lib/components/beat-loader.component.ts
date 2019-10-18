import {Component, Input} from '@angular/core';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'ngx-beat-loader',
  templateUrl: './beat-loader.component.html',
  styleUrls: ['./beat-loader.component.scss']
})
export class BeatLoaderComponent {
  @Input() color = 'rgb(54, 215, 183)';
  @Input() size = 15;
  @Input() sizeUnit = 'px';
  @Input() margin = 2;
  @Input() marginUnit = 'px';

  constructor() {
  }

  createBeatStyle(index: number): Dictionary {
    return {
      'display': 'inline-block',
      'background-color': `${this.color}`,
      'width': `${`${this.size}${this.sizeUnit}`}`,
      'height': `${`${this.size}${this.sizeUnit}`}`,
      'margin': `${`${this.margin}${this.marginUnit}`}`,
      'border-radius': '100%',
      'animation': `loading-beat 0.7s ${index % 2 ? '0s' : '0.35s'} infinite linear`,
      'animation-fill-mode': 'both'
    };
  }
}
