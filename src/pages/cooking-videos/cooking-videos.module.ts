import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CookingVideosPage } from './cooking-videos';
import {commonModule} from '../common.module';

@NgModule({
  declarations: [
    CookingVideosPage,
  ],
  imports: [
    IonicPageModule.forChild(CookingVideosPage),
    commonModule
  ],
  exports: [
    CookingVideosPage
 ],
 entryComponents: [
  CookingVideosPage //here
 ]
})
export class CookingVideosPageModule {}
