import { Component } from '@angular/core';
import { LgtDate } from '@experiment-monorepo/lgt-date';

@Component({
  selector: 'experiment-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    console.log('new Date', new LgtDate().getTodaysDate());
  }
  title = 'smartbanking-showcase';
}
