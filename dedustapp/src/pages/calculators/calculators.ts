import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-calculators',
  templateUrl: 'calculators.html',
})
export class CalculatorsPage {

	diameter: number = 0;
	flow: number = 0;
	result: number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  setDiameter(event: any) { // without type info
    this.diameter = event.target.value;
    this.calculateVelocity();
  }

  setFlow(event: any) { // without type info
    this.flow = event.target.value;
    this.calculateVelocity();
  }

  calculateVelocity(): void {
  	if (this.diameter > 0 && this.flow > 0) {
  		this.result = this.flow / ( Math.PI * (Math.pow( this.diameter/1000 , 2 ) / 4) * 3600 );
  	}
  }

}
