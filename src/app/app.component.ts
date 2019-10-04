import { Component } from '@angular/core';
// import { AppChildComponent } from './app-child/app-child.component';
// import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<app-child (valueChange)='displayCounter($event)'></app-child>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmitterTest';
  name = '';
  name1 = '';
  c = 0;
  // displayCounter( cunt) {
  //   console.log(count);
  // }
  AppCounterChange(cnt: number) {
    this.c = cnt;
  }

}
