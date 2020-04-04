import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechVideosPage } from './tech-videos';
import {commonModule} from '../common.module';

@NgModule({
  declarations: [
    TechVideosPage,
  ],
  imports: [
    IonicPageModule.forChild(TechVideosPage),
    commonModule
  ],
  exports: [
    TechVideosPage
 ],
 entryComponents: [
  TechVideosPage //here
 ]
})
export class TechVideosPageModule {}
