import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-fan-choice',
  templateUrl: 'fan-choice.html',
  //styleUrls: [ 'fan-choice.scss' ]
})
export class FanChoicePage {

	fanEfficiency: number = 0.65;
	motorEfficiency: number = 0.95;
	flow: number;
	pressureDrop: number;
	result: number = 0;

	FanPowerEquation: string ="`p=(\stackrel{.}{V}*\DeltaP_{a})/(\eta_{w}*\eta_{e})`";

	 constructor(public navCtrl: NavController, public navParams: NavParams) {
	 }

	 calculate(): void {
	 	this.result = (this.flow <= 0 || this.pressureDrop <= 0 || this.flow == undefined || this.pressureDrop == undefined) ? 0 : Math.floor((this.flow * this.pressureDrop) / (this.fanEfficiency * this.motorEfficiency));
	 }
}