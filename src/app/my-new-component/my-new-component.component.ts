import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {
  title = 'This is the title of my new component';
  myObject = {
    gender: 'undefined',
    age: 45,
    location: 'US'
  };
  constructor() { }

  ngOnInit() {
  }
}
