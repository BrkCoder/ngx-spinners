import {Component, Input} from '@angular/core';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'ngx-sync-loader',
  templateUrl: './sync-loader.component.html',
  styleUrls: ['./sync-loader.component.scss']
})
export class SyncLoaderComponent {
  @Input() color = 'rgb(54, 215, 183)';
  @Input() size = 15;
  @Input() sizeUnit = 'px';
  @Input() margin = 2;
  @Input() marginUnit = 'px';

  constructor() {
  }

  createBallStyle(index: number): Dictionary {
    return {
      'display': 'inline-block',
      'background-color': `${this.color}`,
      'width': `${`${this.size}${this.sizeUnit}`}`,
      'height': `${`${this.size}${this.sizeUnit}`}`,
      'margin': `${`${this.margin}${this.marginUnit}`}`,
      'border-radius': '100%',
      'animation': `loading-sync 0.6s ${index * 0.07}s infinite ease-in-out`,
      'animation-fill-mode': 'both'
    };
  }
}
