import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhatsappVideosPage } from './whatsapp-videos';
import {commonModule} from '../common.module';

@NgModule({
  declarations: [
    WhatsappVideosPage,
  ],
  imports: [
    IonicPageModule.forChild(WhatsappVideosPage),
    commonModule
  ],
  exports: [
    WhatsappVideosPage
 ],
 entryComponents: [
  WhatsappVideosPage //here
 ]
})
export class WhatsappVideosPageModule {}
