import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.2)'
      })),
      transition('small <=> large', animate('300ms ease-in',
        // style({
        //   transform: 'translateY(40px)'
        // })
        keyframes([
          style({
            opacity: 0,
            transform: 'translateY(-75%)',
            offset: 0
          }),
          style({
            opacity: 1,
            transform: 'translateY(35px)',
            offset: .5
          }),
          style({
            opacity: 1,
            transform: 'translateY(0)',
            offset: 1
          })
        ])
      ))
    ])
  ]
})
export class AppComponent implements OnInit {
  constructor(private _dataService: DataService) {
  }
  showComponentItem = false;
  showTemplatingBasics = false;
  showPropertyBinding = false;
  showEventBinding = false;
  showDefiningStylesheets = false;
  showClassBinding = false;
  showStyleBinding = false;
  showServices = false;
  showAnimation = false;
  showDeploy = true;

  title = 'NG4 tutorial';
  myList = ['him', 'hers', 'yours'];
  showInternalTemplate = false;

  buttonStatus = false;
  angularLogo = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/AngularJS-large.png';

  tittleClass = 'red-tittle';
  showTittleClass = false;

  tittleClasses = {
    'red-tittle': true,
    'large-tittle': true
  };
  tittleStyle = 'orangered';
  showTittleStyle = true;
  tittleStyles = {
    'color': 'purple',
    'font-size': '4em'
  };

  dataServiceTitle = '';
  cars: Array<string>;
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this._dataService.cars);
    this.dataServiceTitle = this._dataService.myDataServiceTitle();
    this.cars = this._dataService.cars;
  }

  myEvent($event, data) {
    console.log(data);
    console.log($event);
  }


  state: string = 'small';
  animateMeClick() {
    console.log('Animated!!!');
    this.state = this.state === 'small' ? 'large' : 'small';
  }
}
