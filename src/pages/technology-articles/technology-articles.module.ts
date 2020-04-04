import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechnologyArticlesPage } from './technology-articles';
import {commonModule} from '../common.module';

@NgModule({
  declarations: [
    TechnologyArticlesPage,
  ],
  imports: [
    IonicPageModule.forChild(TechnologyArticlesPage),
    commonModule
  ],
  exports: [
    TechnologyArticlesPage
 ],
 entryComponents: [
  TechnologyArticlesPage //here
 ]
})
export class TechnologyArticlesPageModule {}
