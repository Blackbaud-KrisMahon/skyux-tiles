import {
  NgModule
} from '@angular/core';

import {
  SkyAppLinkModule
} from '@skyux/router';

import {
  SkyTilesModule
} from './public';

import {
  SkyTileDemoTile1Component
} from './visual/tiles/tile-demo-tile1.component';

import {
  SkyTileDemoTile2Component
} from './visual/tiles/tile-demo-tile2.component';

@NgModule({
  exports: [
    SkyAppLinkModule,
    SkyTilesModule
  ],
  entryComponents: [
    SkyTileDemoTile1Component,
    SkyTileDemoTile2Component
  ]
})
export class AppExtrasModule { }
