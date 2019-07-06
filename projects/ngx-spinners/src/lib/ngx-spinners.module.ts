import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SyncLoaderComponent} from './components/sync-loader.component';
import {SquareLoaderComponent} from './components/square-loader.component';
import {SkewLoaderComponent} from './components/skew-loader.component';
import {ScaleLoaderComponent} from './components/scale-loader.component';
import {RotateLoaderComponent} from './components/rotate-loader.component';
import {RiseLoaderComponent} from './components/rise-loader.component';
import {RingLoaderComponent} from './components/ring-loader.component';
import {PulseLoaderComponent} from './components/pulse-loader.component';
import {PropagateLoaderComponent} from './components/propagate-loader.component';
import {PacmanLoaderComponent} from './components/pacman-loader.component';
import {MoonLoaderComponent} from './components/moon-loader.component';
import {HashLoaderComponent} from './components/hash-loader.component';
import {GridLoaderComponent} from './components/grid-loader.component';
import {FadeLoaderComponent} from './components/fade-loader.component';
import {DotLoaderComponent} from './components/dot-loader.component';
import {ClipLoaderComponent} from './components/clip-loader.component';
import {ClimbingBoxLoaderComponent} from './components/climbing-box-loader.component';
import {CircleLoaderComponent} from './components/circle-loader.component';
import {BounceLoaderComponent} from './components/bounce-loader.component';
import {BeatLoaderComponent} from './components/beat-loader.component';
import {BarLoaderComponent} from './components/bar-loader.component';

const components = [
  SyncLoaderComponent,
  SquareLoaderComponent,
  SkewLoaderComponent,
  ScaleLoaderComponent,
  RotateLoaderComponent,
  RiseLoaderComponent,
  RingLoaderComponent,
  PulseLoaderComponent,
  PropagateLoaderComponent,
  PacmanLoaderComponent,
  MoonLoaderComponent,
  HashLoaderComponent,
  GridLoaderComponent,
  FadeLoaderComponent,
  DotLoaderComponent,
  ClipLoaderComponent,
  ClimbingBoxLoaderComponent,
  CircleLoaderComponent,
  BounceLoaderComponent,
  BeatLoaderComponent,
  BarLoaderComponent
];

@NgModule({
  declarations: components,
  imports: [CommonModule],
  exports: components
})
export class NgxSpinnersModule {
}
