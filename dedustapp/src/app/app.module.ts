import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CalculatorsPage } from '../pages/calculators/calculators';
import { FanChoicePage } from '../pages/fanChoice/fan-choice';

import { MathJaxDirective } from '../directives/MathJax.directive'

import { PowerInWattsPipe } from '../pipes/power-in-watts.pipe'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalculatorsPage,
    FanChoicePage,
    MathJaxDirective,
    PowerInWattsPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CalculatorsPage,
    FanChoicePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}