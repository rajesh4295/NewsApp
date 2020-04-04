import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopNewsPage } from './top-news';

@NgModule({
  declarations: [
    TopNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(TopNewsPage),
  ],
  exports: [
    TopNewsPage
 ],
 entryComponents: [
  TopNewsPage //here
 ]
})
export class TopNewsPageModule {}
