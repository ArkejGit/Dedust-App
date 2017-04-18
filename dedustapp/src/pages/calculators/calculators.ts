import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { HomePage } from '../home/home';


@Component({
  selector: 'page-calculators',
  templateUrl: 'calculators.html',
})
export class CalculatorsPage {

	//tab1Root = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Calculators');
  }

}
