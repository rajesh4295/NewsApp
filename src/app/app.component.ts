import { Component, ViewChild } from '@angular/core';
import { Nav,NavController ,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal, OSNotificationPayload } from '@ionic-native/onesignal';
import { isCordovaAvailable } from '../common/is-cordova-available';
import { oneSignalAppId, sender_id } from '../config';
import { HomePage } from '../pages/home/home';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
// import { ListPage } from '../pages/list/list';
//one signal app id :Your App ID: 6ccdd3af-89b2-4b56-97d9-0989de3e4598
//Admob: App ID: ca-app-pub-7530249767569480~2656077686

@Component({
  selector: 'page-side-menu',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: NavController;

  rootPage: any = HomePage;

  videoPages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
     public statusBar: StatusBar, 
     public splashScreen: SplashScreen,
     private oneSignal: OneSignal,
     private themeableBrowser: ThemeableBrowser,
     private admob: AdMobFree
    ) {
    this.initializeApp();

    // // used for an example of ngFor and navigation
    // this.videoPages = [
    //   { title: 'News', component: "VideosPage" },
    //   { title: 'Technology', component: "TechVideosPage" },
    //   { title: 'Health', component: "HealthVideosPage" },
    //   { title: 'Whatsapp', component: "WhatsappVideosPage" },
    //   { title: 'Cooking', component: "CookingVideosPage" },
    //   { title: 'Funny', component: "FunnyVideosPage" },
    //   // { title: 'List', component: ListPage }
    // ];
    (()=>{
      setInterval(async ()=>{
        await this.showInterstitial();
      }
        ,3*60*1000);
    })();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.showBanner();
      if (isCordovaAvailable()){
        this.oneSignal.startInit(oneSignalAppId, sender_id);
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe(data => this.onPushReceived(data.payload));
        this.oneSignal.handleNotificationOpened().subscribe(data => this.onPushOpened(data.notification.payload));
        this.oneSignal.endInit();
      }
    });
  }

  private onPushReceived(payload: OSNotificationPayload) {
    // alert('Push recevied:' + payload.body);
  }
  // additionalData:any;
  private onPushOpened(payload: OSNotificationPayload) {
    // alert('Push opened: ' + payload.additionalData["target_url"]);
    // this.additionalData=payload.additionalData;
    this.openWebPage(payload.additionalData["target_url"]);
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
  // openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
    // this.nav.push(page.component);
  // }
 
    

  
async showBanner() {
  try{
      let bannerConfig: AdMobFreeBannerConfig = {
          id:'ca-app-pub-7530249767569480/5735157851',     
          autoShow: true,
          // overlap:true,
          size:'FULL_BANNER'     
          }  
      this.admob.banner.config(bannerConfig);
      const result =await this.admob.banner.prepare();
      }
      catch(e)
      {

      }
}

ionViewDidLoad(){
  
  // this.showInterstitial();
}

async showInterstitial() {
  try{
      let interstitialConfig: AdMobFreeInterstitialConfig = {
          id:'ca-app-pub-7530249767569480/3135966557',     
          autoShow: true,
          // overlap:true,
          // size:'FULL_BANNER'     
          }  
      this.admob.interstitial.config(interstitialConfig);
      const result =await this.admob.interstitial.prepare();
      }
      catch(e)
      {

      }
}


}
