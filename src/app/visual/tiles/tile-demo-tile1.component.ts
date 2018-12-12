import { Component } from '@angular/core';

import { HelpWidgetService } from '@blackbaud/skyux-lib-help';

@Component({
  // tslint:disable-next-line
  selector: 'div.tile1',
  templateUrl: './tile-demo-tile1.component.html'
})
export class SkyTileDemoTile1Component {

  constructor(private helpService: HelpWidgetService) {}

  public tileHelpClick() {
    this.helpService.openWidget('sec-adduser.html');
  }

  public tileSettingsClick() {
    alert('tile settings clicked');
  }
}
