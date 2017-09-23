import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = [
    'ford', 'Chevrolet', 'Buick'
  ];
  myDataServiceTitle() {
    return 'The list of cars come from Data service:';
  }
}
