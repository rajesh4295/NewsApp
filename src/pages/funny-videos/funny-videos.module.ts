import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FunnyVideosPage } from './funny-videos';
import {commonModule} from '../common.module';

@NgModule({
  declarations: [
    FunnyVideosPage,
  ],
  imports: [
    IonicPageModule.forChild(FunnyVideosPage),
    commonModule
  ],
  exports: [
    FunnyVideosPage
 ],
 entryComponents: [
  FunnyVideosPage //here
 ]
})
export class FunnyVideosPageModule {}
