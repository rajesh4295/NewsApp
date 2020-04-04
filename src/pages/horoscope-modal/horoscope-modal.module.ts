import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HoroscopeModalPage } from './horoscope-modal';

@NgModule({
  declarations: [
    HoroscopeModalPage,
  ],
  imports: [
    IonicPageModule.forChild(HoroscopeModalPage),
  ],
  exports: [
    HoroscopeModalPage
 ],
 entryComponents: [
  HoroscopeModalPage //here
 ]
})
export class HoroscopeModalPageModule {}
