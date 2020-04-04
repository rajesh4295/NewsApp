import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
// import { TopNewsPage } from '../top-news/top-news';
// import { VideosPage } from '../videos/videos';
// import { NewsArticlesPage } from '../news-articles/news-articles';
import {SuperTabsController} from 'ionic2-super-tabs';
import { Page } from 'ionic-angular/navigation/nav-util';

// @IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  

  
  constructor(public navCtrl: NavController,
    private superTabsCtrl: SuperTabsController,
    public params:NavParams
  ) {

  }
  topNews = "TopNewsPage";
  videos = "VideosPage";
  newArticles="NewsArticlesPage";
  tweets="TweetsPage";
  horoscope="HoroscopePage";
  tabs:any =[
    {
      root: this.topNews,
      title:"Top Sites"  
     },
    //  {
    //   root: this.videos,
    //   title:"Videos" 
    //   },
      {
       root: this.newArticles,
      title:"Articles" 
      },
      {
        root: this.horoscope,
       title:"Horoscope" 
       },
      {
        root: this.tweets,
       title:"Tweets" 
       }
    ];
     
}
