import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Dictionary} from '../dictionary';

@Component({
  selector: 'ngx-fade-loader',
  templateUrl: './fade-loader.component.html',
  styleUrls: ['./fade-loader.component.scss']
})
export class FadeLoaderComponent implements OnInit {
  @Input() color = 'rgb(54, 215, 183)';
  @Input() height = 15;
  @Input() heightUnit = 'px';
  @Input() width = 5;
  @Input() widthUnit = 'px';
  @Input() margin = 2;
  @Input() marginUnit = 'px';
  @Input() radius = 2;
  @Input() radiusUnit = 'px';
  private radiusFactor = 20;

  constructor() {
  }

  ngOnInit() {
  }

  createFadeWrapperStyle(): Dictionary {
    return {
      'position': 'relative',
      'font-size': '0',
      'top': `${this.radiusFactor}px`,
      'left': `${this.radiusFactor}px`,
      'width': `${this.radiusFactor * 3}px`,
      'height': `${this.radiusFactor * 3}px`
    };
  }

  createFadeStyleA(): Dictionary {
    return {
      ...this.createFadeStyle(1),
      'top': `${this.radiusFactor}px`,
      'left': '0',
    };
  }

  createFadeStyleB(): Dictionary {
    return {
      ...this.createFadeStyle(2),
      'top': `${this.createQuarter()}px`,
      'left': `${this.createQuarter()}px`,
      'transform': 'rotate(-45deg)'
    };
  }

  createFadeStyleC(): Dictionary {
    return {
      ...this.createFadeStyle(3),
      'top': '0',
      'left': `${this.radiusFactor}px`,
      'transform': 'rotate(90deg)'
    };
  }

  createFadeStyleD(): Dictionary {
    return {
      ...this.createFadeStyle(4),
      'top': `${-1 * this.createQuarter()}px`,
      'left': `${this.createQuarter()}px`,
      'transform': 'rotate(45deg)'
    };
  }

  createFadeStyleE(): Dictionary {
    return {
      ...this.createFadeStyle(5),
      'top': `${-1 * this.radiusFactor}px`,
      'left': '0'
    };
  }

  createFadeStyleF(): Dictionary {
    return {
      ...this.createFadeStyle(6),
      'top': `${-1 * this.createQuarter()}px`,
      'left': `${-1 * this.createQuarter()}px`,
      'transform': 'rotate(-45deg)'
    };
  }

  createFadeStyleG(): Dictionary {
    return {
      ...this.createFadeStyle(7),
      'top': '0',
      'left': `${-1 * this.radiusFactor}px`,
      'transform': 'rotate(90deg)'
    };
  }

  createFadeStyleH(): Dictionary {
    return {
      ...this.createFadeStyle(8),
      'top': `${this.createQuarter()}px`,
      'left': `${-1 * this.createQuarter()}px`,
      'transform': 'rotate(45deg)'
    };
  }

  private createFadeStyle(index: number): Dictionary {
    return {
      'position': 'absolute',
      'width': `${`${this.width}${this.widthUnit}`}`,
      'height': `${`${this.height}${this.heightUnit}`}`,
      'margin': `${`${this.margin}${this.marginUnit}`}`,
      'background-color': `${this.color}`,
      'border-radius': `${`${this.radius}${this.radiusUnit}`}`,
      'transition': '2s',
      'animation-fill-mode': 'both',
      'animation': `loading-fade 1.2s ${index * 0.12}s infinite ease-in-out`
    };
  }

  private createQuarter() {
    return (this.radiusFactor / 2) + (this.radiusFactor / 5.5);
  }
}
