import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  // templateUrl: './app-child.component.html',
  template: `<button class='btn btn-primary' (click)="valueChanged()">Click me</button> `,
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit {

@Output() valueChange = new EventEmitter();

counter = 0;
  constructor() { }

  ngOnInit() {
  }

  valueChanged() { // You can give any function name
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
}

  handleclick() {
    console.log('hey I am  clicked in child');
}
}
