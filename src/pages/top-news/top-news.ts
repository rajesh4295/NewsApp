import { Component, ViewChild,OnInit,AfterViewInit,Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides ,BlockerDelegate } from 'ionic-angular';
import { NewsServiceProvider} from '../../providers/news-service/news-service';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
import {newsSites, socialSites, shoppingSites, videoSites, blogSites} from '../../assets/lib/siteData';

/**
 * Generated class for the TopNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top-news',
  templateUrl: 'top-news.html',
})

export class TopNewsPage implements OnInit {
    @ViewChild(Slides) slides: Slides;
  newsSites=newsSites;
  socialSites=socialSites;
  shoppingSites=shoppingSites;
  videoSites=videoSites;
  blogSites=blogSites;
  randomeQuote:any={};
  wallpapers:any[];
  topStories:any=[];
  newsAvatar:string="../../assets/imgs/newsAvatar.jpeg";
  socialAvatar:string="../../assets/imgs/socialAvatar.jpeg";
  sportsAvatar:string="../../assets/imgs/sportsAvatar.jpeg";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private newsService: NewsServiceProvider,
    private themeableBrowser: ThemeableBrowser,
    public renderer: Renderer,
  )
 {
  
  }

  ionViewWillEnter(){
   
}


// }
//  @ViewChild("ccNews") cardContent:any;
//   @ViewChild("ccSocial") cardContentSocial:any;
    ngOnInit(){
        // this.renderer.setElementStyle(this.cardContent.nativeElement,"webkitTransition","max-height 500ms,padding 500ms");
        // this.renderer.setElementStyle(this.cardContentSocial.nativeElement,"webkitTransition","max-height 500ms,padding 500ms");
    }

    // newsExpanded=false;
    // toggleNews(){
    //     if(this.newsExpanded){                     
    //             this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height","0px");
    //     }
    //      else{
    //              this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height","500px");                       
    //     }      
    //     this.newsExpanded=!this.newsExpanded;
    // }

    // socialExpanded=false;
    // toggleSocial(){
    //     if(this.socialExpanded){                    
    //         this.renderer.setElementStyle(this.cardContentSocial.nativeElement,"max-height","0px");
    //     }
    // else{
    //          this.renderer.setElementStyle(this.cardContentSocial.nativeElement,"max-height","500px");        
    //     }
    //     this.socialExpanded=!this.socialExpanded;
    // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopNewsPage');
    this.getWallpapers();
    this.getQuote();
    
  }

  slideChanged(){
    this.getQuote();
    // this.slides.lockSwipes(true);
    this.slides.autoplayDisableOnInteraction = false;
  }


  getQuote(){
    this.newsService.getRandomQuote().subscribe(
        data =>this.randomeQuote=data
      )
  }

  getWallpapers(){
    this.newsService.getWallpaperFeed().subscribe(
        data =>this.wallpapers=data
      )
  }

  openWebPage(site:string){
    const options: ThemeableBrowserOptions = {
      statusbar: {
          color: '#ffffffff'//
      },
      toolbar: {
          height: 44,
          color: '#FF416C'//
      },
      title: {
          color: '#003264ff',//
          showPageTitle: false
      },
      closeButton: {
        wwwImage: 'assets/imgs/left-arrow.png',
          imagePressed: 'close_pressed',
          align: 'left',
          event: 'closePressed'
      },      
      backButtonCanClose: true
      
 };
 const browser: ThemeableBrowserObject = this.themeableBrowser.create(site, '_blank', options);
  }

}
