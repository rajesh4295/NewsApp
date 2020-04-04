import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideosPage } from './videos';
import {commonModule} from '../common.module';


@NgModule({
  declarations: [
    VideosPage
  ],
  imports: [
     IonicPageModule.forChild(VideosPage),
     commonModule
  ],
  exports: [
     VideosPage
  ],
  entryComponents: [
    VideosPage //here
  ]
})
export class VideosPageModule {}
