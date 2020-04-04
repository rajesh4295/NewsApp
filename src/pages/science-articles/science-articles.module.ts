import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScienceArticlesPage } from './science-articles';
import {commonModule} from '../common.module';

@NgModule({
  declarations: [
    ScienceArticlesPage,
  ],
  imports: [
    IonicPageModule.forChild(ScienceArticlesPage),
    commonModule
  ],
  exports: [
    ScienceArticlesPage
 ],
 entryComponents: [
  ScienceArticlesPage //here
 ]
})
export class ScienceArticlesPageModule {}
