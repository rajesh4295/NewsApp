import { Component,OnInit,ChangeDetectorRef,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController,Content  } from 'ionic-angular';
// import { HttpClient } from '@angular/common/http';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
import {NewsServiceProvider} from '../../providers/news-service/news-service';
import {VideoCategories} from '../../assets/lib/siteData';

@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {
  @ViewChild('pageTop') pageTop: Content;
  // @ViewChild(browser) browser;
  rssObj: any=[];
  items = [];
  count: number = 0;
  dateIcon:string="../../assets/imgs/icons8-time-50.png";
  playIcon:string="../../assets/imgs/play-64.png"
  reachedEnd:boolean=false;
  VideoCategories=VideoCategories;

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,  
     public service:NewsServiceProvider,
     public loadingCtrl: LoadingController,
     private themeableBrowser: ThemeableBrowser,
     private alertCtrl: AlertController,
     private cdRef:ChangeDetectorRef,
    ) {
      
  }


ngOnInit(){

  this.getData();
  this.cdRef.detectChanges();
  }

  ionViewWillEnter(){
  }

  ionViewDidLoad() {    
  }

  ionViewDidLeave(){
  }

  loadPage(pageName:string){
    console.log(pageName);
    this.navCtrl.push(pageName);
      }


  public pageScroller(){
    //scroll to page top
    this.pageTop.scrollToTop();
  }
 
  getData(){
    // let loading = this.loadingCtrl.create({content : "Loading Videos..."});
    // loading.present();
    // var videoID=[];
    this.service.getTopStories().subscribe((data)=> {     
        // this.rssObj=res.items;
        // console.log(JSON.parse(data.toString()));
        // for(let i=0;i<JSON.parse(data.toString()).length;i++){
        //       for(let j=0;j<JSON.parse(data.toString())[i].feed.entry.length;j++){
        //         var temp={
        //           ytID:JSON.parse(data.toString())[i].feed.entry[j]['yt:videoId'][0],
        //           title:JSON.parse(data.toString())[i].feed.entry[j].title[0],
        //           link:JSON.parse(data.toString())[i].feed.entry[j].link[0].$.href,
        //           date:JSON.parse(data.toString())[i].feed.entry[j].published[0]
        //         }
        //         videoID.push(temp);
        //         // console.log(this.temp);
        //       } 
        //     }  
            // this.rssObj=videoID;
            // console.log(data)
            this.rssObj=data;

            for (let i = 0; i < 11; i++) {  // here you can limit the items according to your needs.
                this.items.push(this.rssObj[this.count]);   // your JSON data which you want to display
                this.count++ //i am using a count variable to keep track of inserted records to avoid inserting duplicate records on infinite scroll
              }
            // loading.dismissAll();
            // console.log(this.videoID);
   },(err)=>{
    console.log(err);
    // loading.dismissAll();
    this.presentAlert();
   }); 
    // return new Promise(resolve=>{
    //   this.service.getTopStories().subscribe(
    //     function(res) {     
    //       // this.rssObj=res.items;
    //       resolve(res);
    //       // this._zone.run(() => this.rssObj = data.items);
    //       // console.log( this.rssObj); 
    //       // this.rssObj=['hi','bye','three']; 
    //       // console.log( this.rssObj);    
      
    //  }); 
    // })
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      for (let i = 0; i < 11; i++) {   
        if(this.rssObj[this.count]!=null || this.rssObj[this.count]!=undefined){
        this.items.push(this.rssObj[this.count]); // this will start pushing next 5 items
        this.count++
        }
        else{
          this.reachedEnd=true;     
        }
      }
  
      infiniteScroll.complete();
    }, 500);
  }

  // doRefresh(refresher) {
  //   console.log('Begin async operation', refresher);
  //   this.getData();
  //   setTimeout(() => {
  //     console.log('Async operation has ended');
  //     refresher.complete();
  //   }, 2000);
  // }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Network bussy',
      subTitle: 'Please try in sometime.',
      buttons: ['Close']
    });
    alert.present();
  }

  openWebPage(site:string){
    // this.browser.openBrowser(site);
  
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