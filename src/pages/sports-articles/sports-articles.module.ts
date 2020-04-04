import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SportsArticlesPage } from './sports-articles';
import {commonModule} from '../common.module';

@NgModule({
  declarations: [
    SportsArticlesPage,
  ],
  imports: [
    IonicPageModule.forChild(SportsArticlesPage),
    commonModule
  ],
  exports: [
    SportsArticlesPage
 ],
 entryComponents: [
  SportsArticlesPage //here
 ]
})
export class SportsArticlesPageModule {}
