import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HoroscopePage } from './horoscope';

@NgModule({
  declarations: [
    HoroscopePage,
  ],
  imports: [
    IonicPageModule.forChild(HoroscopePage),
  ],
  exports: [
    HoroscopePage
 ],
 entryComponents: [
  HoroscopePage //here
 ]
})
export class HoroscopePageModule {}
