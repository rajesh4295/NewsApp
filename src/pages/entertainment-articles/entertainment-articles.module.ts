import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntertainmentArticlesPage } from './entertainment-articles';
import {commonModule} from '../common.module';

@NgModule({
  declarations: [
    EntertainmentArticlesPage,
  ],
  imports: [
    IonicPageModule.forChild(EntertainmentArticlesPage),
    commonModule
  ],
  exports: [
    EntertainmentArticlesPage
 ],
 entryComponents: [
  EntertainmentArticlesPage //here
 ]
})
export class EntertainmentArticlesPageModule {}
