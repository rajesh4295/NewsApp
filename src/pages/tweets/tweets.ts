import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';
import { NewsServiceProvider} from '../../providers/news-service/news-service';
declare var twttr:any;
/**
 * Generated class for the TweetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tweets',
  templateUrl: 'tweets.html',
})
export class TweetsPage {
  @ViewChild('pageTop') pageTop: Content;
  tweetUrl:any=[
  'https://twitter.com/ZeeNews',
  'https://twitter.com/ndtvvideos',
  'https://twitter.com/TOIIndiaNews',
  'https://twitter.com/htTweets',
  'https://twitter.com/IndiaToday'
];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private newsService: NewsServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TweetsPage');
    this.twitterFeeds();

   
  }

  public pageScroller(){
    //scroll to page top
    this.pageTop.scrollToTop();
  }

  twitterFeeds(){
    twttr.widgets.createTimeline(
      {
        sourceType: "list",
        ownerScreenName: "raj4esh",
        slug: "tweets"       
      },
      document.getElementById("container"),
      {
        chrome: "noheader",
        theme: 'light'
                    // conversation:'none'
      }
    );
    // for(let i=0;i<this.tweetUrl.length;i++){
    //   twttr.widgets.createTimeline(
    //     {
    //       sourceType: 'list',
    //       url: this.tweetUrl[i],
    //       chrome: 'noheader nofooter'
    //     },
    //     document.getElementById('container')
    //   );
    // }
   
    // this.newsService.getTwitterFeed().subscribe((data) => {
    //   // console.log(data.length)
    //   for(let i=0;i<data.length;i++){
    //         twttr.widgets.createTweet(
    //           data[i],
    //           document.getElementById('container'),
    //           {
    //             theme: 'light'
    //             // conversation:'none'
    //           }
    //         );
    //       }
    // })
// console.log(this.statusId)
    // 
  }

}
