import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-counter',
  templateUrl: './child-counter.component.html',
  styleUrls: ['./child-counter.component.css']
})
export class ChildCounterComponent implements OnInit {
  c = 0;

  constructor() { }

  ngOnInit() {
  }

}
