import { Component,ChangeDetectorRef,ViewChild,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';
import { NewsServiceProvider} from '../../providers/news-service/news-service';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
import {categories} from '../../assets/lib/siteData';
/**
 * Generated class for the HealthArticlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-health-articles',
  templateUrl: 'health-articles.html',
})
export class HealthArticlesPage {
  @ViewChild('pageTop') pageTop: Content;
  reachedEnd:boolean=false;
  topHeadLines:any=[];
  items = [];
  count: number = 0;
  // categories=categories;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private newsService: NewsServiceProvider,
    private themeableBrowser: ThemeableBrowser,
    private cdRef:ChangeDetectorRef

  ) {
  }

  ionViewDidLoad() {
  }
  ngOnInit(){
    this.getTopHeadLines();
    this.cdRef.detectChanges();
    }

    public pageScroller(){
      //scroll to page top
      this.pageTop.scrollToTop();
    }

    getTopHeadLines(){
      this.newsService.getHealthArticleFeed().subscribe((data) =>{
            this.topHeadLines=data
            for (let i = 0; i < 10; i++) {
              this.items.push(this.topHeadLines[this.count]); 
              this.count++ 
            }
          },(err)=>{
            console.log(err);
          });
    }

categories=categories;
loadPage(pageName:string){
console.log(pageName);
this.navCtrl.push(pageName);
  }

  
    doInfinite(infiniteScroll) {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {   
          if(this.topHeadLines[this.count]!=null || this.topHeadLines[this.count]!=undefined){
            this.items.push(this.topHeadLines[this.count]); 
            this.count++
            console.log("more data")
          }
          else{
            console.log("no more data");
            this.reachedEnd=true;         
          }        
        }
        infiniteScroll.complete();      
      }, 500);
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
