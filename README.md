# Ngx Spinners
A collection of loading spinners with angular based on [Halogen](https://github.com/yuanyan/halogen).

## Installation

```bash
npm install ngx-spinners --save
```
## Usage

Add the declaration in your `app.module.ts` file:
```typescript
import {NgxSpinnersModule} from 'ngx-spinners';
...
@NgModule({
  imports: [
    NgxSpinnersModule
  ]
})
```
Select the right loader for you and put it into your html
```html
<ngx-sync-loader></ngx-sync-loader>
```
## Available Loaders

Loader                  | selector | 
-----------------------:|:--------:|
SyncLoader              |    `<ngx-sync-loader></ngx-sync-loader> `                   | 
SquareLoader            |    `<ngx-square-loader></ngx-square-loader> `               | 
SkewLoader              |    `<ngx-skew-loader></ngx-skew-loader> `                   | 
ScaleLoader             |    `<ngx-scale-loader></ngx-scale-loader> `                 | 
RotateLoader            |    `<ngx-rotate-loader></ngx-rotate-loader> `               | 
RiseLoader              |    `<ngx-rise-loader></ngx-rise-loader> `                   | 
RingLoader              |    `<ngx-ring-loader></ngx-ring-loader> `                   | 
PulseLoader             |    `<ngx-pulse-loader></ngx-pulse-loader> `                 | 
PropagateLoader         |    `<ngx-propagate-loader></ngx-propagate-loader> `         | 
PacmanLoader            |    `<ngx-pacman-loader></ngx-pacman-loader> `               | 
MoonLoader              |    `<ngx-moon-loader></ngx-moon-loader> `                   | 
HashLoader              |    `<ngx-hash-loader></ngx-hash-loader> `                   |
GridLoader              |    `<ngx-grid-loader></ngx-grid-loader> `                   |
FadeLoader              |    `<ngx-fade-loader></ngx-fade-loader> `                   |
DotLoader               |    `<ngx-dot-loader></ngx-dot-loader> `                     |
FadeLoader              |    `<ngx-fade-loader></ngx-fade-loader> `                   |
ClipLoader              |    `<ngx-clip-loader></ngx-clip-loader> `                   |
ClimbingBoxLoader       |    `<ngx-climbing-box-loader></ngx-climbing-box-loader> `   |
CircleLoader            |    `<ngx-circle-loader></ngx-circle-loader> `               |
BounceLoader            |    `<ngx-bounce-loader></ngx-bounce-loader> `               |
BeatLoader              |    `<ngx-beat-loader></ngx-beat-loader> `                   |
BarLoader               |    `<ngx-bar-loader></ngx-bar-loader> `                     |
