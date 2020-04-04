import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessArticlesPage } from './business-articles';
import {commonModule} from '../common.module';

@NgModule({
  declarations: [
    BusinessArticlesPage
  ],
  imports: [
    IonicPageModule.forChild(BusinessArticlesPage),
    commonModule
  ],
  exports: [
    BusinessArticlesPage
 ],
 entryComponents: [
  BusinessArticlesPage //here
 ]
})
export class BusinessArticlesPageModule {}
