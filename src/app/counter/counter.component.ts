import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count = 0;

  @Output() counterChange = new EventEmitter<number>();

  constructor() {

  }

  @Input() _counter() {
      return this.count;
    }
  //   get _counter() {
  //   return this.count;
  // }

  // set _counter(cnt) {
  //   this.count = cnt;
  // }

  ngOnInit() {
  }
  increment() {
    this.count++;
    this.counterChange.emit(this.count);
  }

  decrement() {
    this.count--;
    this.counterChange.emit(this.count);
  }

}
