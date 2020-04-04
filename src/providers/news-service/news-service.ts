import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

/*
  Generated class for the NewsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsServiceProvider Provider');
  }
  getTopStories(): Observable<any>{
    return this.http.get('https://get-all-feed.now.sh/videoFeed');
    // return this.http.get('http://127.0.0.1:8080/videoFeed');
  }

  getRandomQuote():Observable<any>{
    return this.http.get('https://talaikis.com/api/quotes/random/');
  }

  getTopHeadlines():Observable<any>{
    return this.http.get('https://get-all-feed.now.sh/topHeadlinesFeed');
    // return this.http.get('http://127.0.0.1:8080/topHeadlinesFeed');
  }

  getBusinessArticleFeed():Observable<any>{
    return this.http.get('https://get-all-feed.now.sh/businessArticleFeed');
    // return this.http.get('http://127.0.0.1:8080/businessArticleFeed');
  }

  getEntertainmentArticleFeed():Observable<any>{
    return this.http.get('https://get-all-feed.now.sh/entertainmentArticleFeed');
    // return this.http.get('http://127.0.0.1:8080/entertainmentArticleFeed');
  }

  getHealthArticleFeed():Observable<any>{
    return this.http.get('https://get-all-feed.now.sh/healthArticleFeed');
    // return this.http.get('http://127.0.0.1:8080/healthArticleFeed');
  }

  getScienceArticleFeed():Observable<any>{
    return this.http.get('https://get-all-feed.now.sh/scienceArticleFeed');
    // return this.http.get('http://127.0.0.1:8080/scienceArticleFeed');
  }

  getSportsArticleFeed():Observable<any>{
    return this.http.get('https://get-all-feed.now.sh/sportsArticleFeed');
    // return this.http.get('http://127.0.0.1:8080/sportsArticleFeed');
  }

  getTechnologyArticleFeed():Observable<any>{
    return this.http.get('https://get-all-feed.now.sh/technologyArticleFeed');
    // return this.http.get('http://127.0.0.1:8080/technologyArticleFeed');
  }

  getHoroscopeFeed():Observable<any>{
    return this.http.get('https://get-all-feed.now.sh/horoscopeFeed');
    // return this.http.get('http://127.0.0.1:8080/horoschopeFeed');
  }

  getWallpaperFeed():Observable<any>{
    return this.http.get('https://get-all-feed.now.sh/wallpaperFeed');
    // return this.http.get('http://127.0.0.1:8080/wallpaperFeed');
  }

  getTwitterFeed():Observable<any>{
    return this.http.get('https://get-all-feed.now.sh/twitterFeed');
    // return this.http.get('http://127.0.0.1:8080/twitterFeed');
  }

  getTechVideoFeed():Observable<any>{
    return this.http.get('https://get-all-feed.now.sh/techVideoFeed');
    // return this.http.get('http://127.0.0.1:8080/techVideoFeed');
  }

  getWhatsappVideoFeed():Observable<any>{
    return this.http.get('https://get-all-feed.now.sh/whatsappVideoFeed');
    // return this.http.get('http://127.0.0.1:8080/whatsappVideoFeed');
  }

  getCookingVideoFeed():Observable<any>{
    return this.http.get('https://get-all-feed.now.sh/cookingVideoFeed');
    // return this.http.get('http://127.0.0.1:8080/cookingVideoFeed');
  }

  getFunnyVideoFeed():Observable<any>{
    return this.http.get('https://get-all-feed.now.sh/funnyVideoFeed');
    // return this.http.get('http://127.0.0.1:8080/funnyVideoFeed');
  }

  getHealthVideoFeed():Observable<any>{
    return this.http.get('https://get-all-feed.now.sh/healthVideoFeed');
    // return this.http.get('http://127.0.0.1:8080/healthVideoFeed');
  }
}