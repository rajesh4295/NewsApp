import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthArticlesPage } from './health-articles';
import {commonModule} from '../common.module';

@NgModule({
  declarations: [
    HealthArticlesPage,
  ],
  imports: [
    IonicPageModule.forChild(HealthArticlesPage),
    commonModule
  ],
  exports: [
    HealthArticlesPage
 ],
 entryComponents: [
  HealthArticlesPage //here
 ]
})
export class HealthArticlesPageModule {}
