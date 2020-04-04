import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { ThemeableBrowser} from '@ionic-native/themeable-browser';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
// import { TopNewsPage } from '../pages/top-news/top-news';
// import { NewsArticlesPage } from '../pages/news-articles/news-articles';
// import { VideosPage } from '../pages/videos/videos';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsServiceProvider } from '../providers/news-service/news-service';
import { OneSignal } from '@ionic-native/onesignal';
import { AdMobFree } from '@ionic-native/admob-free';
// import {TimeAgoPipe} from 'time-ago-pipe';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // ListPage
    // TopNewsPage,
    // VideosPage,
    // NewsArticlesPage
    // TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp)
     
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // ListPage
    // TopNewsPage,
    // VideosPage,
    // NewsArticlesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NewsServiceProvider,
    ThemeableBrowser, 
    OneSignal,
    AdMobFree,
    {provide: ErrorHandler, useClass: IonicErrorHandler}    
  ]
})
export class AppModule {}
