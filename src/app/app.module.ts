import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppChildComponent } from './app-child/app-child.component';
import { NgModel, FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { ChildCounterComponent } from './child-counter/child-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    AppChildComponent,
    CounterComponent,
    ChildCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
