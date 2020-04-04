import { Component,OnInit,ChangeDetectorRef,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController,Content  } from 'ionic-angular';
// import { HttpClient } from '@angular/common/http';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
import {NewsServiceProvider} from '../../providers/news-service/news-service';
import {VideoCategories} from '../../assets/lib/siteData';
/**
 * Generated class for the CookingVideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cooking-videos',
  templateUrl: 'cooking-videos.html',
})
export class CookingVideosPage {

  @ViewChild('pageTop') pageTop: Content;
  rssObj: any=[];
  items = [];
  count: number = 0;
  dateIcon:string="../../assets/imgs/icons8-time-50.png";
  playIcon:string="../../assets/imgs/play-64.png"
  reachedEnd:boolean=false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,  
    public service:NewsServiceProvider,
    public loadingCtrl: LoadingController,
    private themeableBrowser: ThemeableBrowser,
    private alertCtrl: AlertController,
    private cdRef:ChangeDetectorRef
  ) {
  }

  ngOnInit(){
   
  }

  ionViewDidLoad() {
    this.getData();
    this.cdRef.detectChanges();
    console.log('ionViewDidLoad TechVideosPage');
  }

  public pageScroller(){
    //scroll to page top
    this.pageTop.scrollToTop();
  }
 
  getData(){
   
    this.service.getCookingVideoFeed().subscribe((data)=> {     
        // alert("success")
            this.rssObj=data;

            for (let i = 0; i < 11; i++) {  // here you can limit the items according to your needs.
                this.items.push(this.rssObj[this.count]);   // your JSON data which you want to display
                this.count++ //i am using a count variable to keep track of inserted records to avoid inserting duplicate records on infinite scroll
              }
 
   },(err)=>{
    console.log(err);
    // loading.dismissAll();
    this.presentAlert();
   }); 

  }

  VideoCategories=VideoCategories;
loadPage(pageName:string){
console.log(pageName);
this.navCtrl.push(pageName);
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

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Network bussy',
      subTitle: 'Please try in sometime.',
      buttons: ['Close']
    });
    alert.present();
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
