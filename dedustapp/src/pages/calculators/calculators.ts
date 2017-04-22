import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-calculators',
  templateUrl: 'calculators.html',
  //styleUrls: [ 'calculators.scss' ]
  
})
export class CalculatorsPage {

	velocity: number = 0;
	diameter: number = 0;
	flow: number = 0;
	result: number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  setVelocity(event: any, parameter: string): void {
    this.velocity = event.target.value;
    this.calculate(parameter);
  }

  setDiameter(event: any, parameter: string): void {
    this.diameter = event.target.value;
    this.calculate(parameter);
  }

  setFlow(event: any, parameter: string): void {
    this.flow = event.target.value;
    this.calculate(parameter);
  }

  calculate(parameter: string): void {
  	switch (parameter) {
  		case "velocity":
  			if (this.diameter > 0 && this.flow > 0) {
		  		this.result = Math.round( this.flow / ( Math.PI * (Math.pow( this.diameter/1000 , 2 ) / 4) * 3600 ));
		  	}
  			break;
  		case "diameter":
  			if (this.velocity > 0 && this.flow > 0) {
		  		this.result = Math.round( Math.sqrt((4* this.flow) / (3600 * Math.PI * this.velocity)) * 1000 );
		  	}
  			break;
  		case "flow":
  			if (this.velocity > 0 && this.diameter > 0) {
		  		this.result = Math.round( this.velocity * 3600 * Math.PI * Math.pow(this.diameter / 1000 , 2) / 4);
		  	}
  			break;
  	}
  }

  clearParameters(): void {
  	this.result = 0;
  	this.velocity = 0;
	this.diameter = 0;
	this.flow = 0;
  }

}
