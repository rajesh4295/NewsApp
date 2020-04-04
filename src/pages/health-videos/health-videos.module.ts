import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthVideosPage } from './health-videos';
import {commonModule} from '../common.module';

@NgModule({
  declarations: [
    HealthVideosPage,
  ],
  imports: [
    IonicPageModule.forChild(HealthVideosPage),
    commonModule
  ],
  exports: [
    HealthVideosPage
 ],
 entryComponents: [
  HealthVideosPage //here
 ]
})
export class HealthVideosPageModule {}
