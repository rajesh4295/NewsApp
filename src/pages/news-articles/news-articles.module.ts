import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsArticlesPage } from './news-articles';
import {commonModule} from '../common.module';
// import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    NewsArticlesPage
  ],
  imports: [    
    // SuperTabsModule,
    IonicPageModule.forChild(NewsArticlesPage),
    commonModule
    
  ],
  exports: [
    NewsArticlesPage
 ],
 entryComponents: [
  NewsArticlesPage //here
 ]
})
export class NewsArticlesPageModule {}
