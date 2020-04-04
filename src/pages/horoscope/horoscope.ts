import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {zodiacs} from '../../assets/lib/siteData';
import { NewsServiceProvider} from '../../providers/news-service/news-service';

/**
 * Generated class for the HoroscopePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horoscope',
  templateUrl: 'horoscope.html',
})
export class HoroscopePage {
 zodiacs=zodiacs;
 dailyHoroscope:any;
 Aries:any;
 Taurus:any;
 Gemini:any;
 Cancer:any;
 Leo:any;
 Virgo:any;
 Libra:any;
 Scorpio:any;
 Sagitarius:any;
 Capricorn:any;
 Aquarius:any;
 Pisces:any;
 zodiacModal:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private newsService: NewsServiceProvider
  ) {
   
  }
 
  ngOnInit(){
   
    
  }
  ionViewDidLoad() {

    // for(let i=0;i<this.statusId.length;i++){
    //   twttr.widgets.createTweet(
    //     this.statusId[i],
    //     document.getElementById('container'),
    //     {
    //       theme: 'light'
    //     }
    //   );
    // }
    // twttr.widgets.createTimeline(
    //   {
    //     sourceType: 'url',
    //     url: 'https://twitter.com/ndtvvideos',
    //     chrome: 'noheader nofooter'
    //   },
    //   document.getElementById('container')
    // );


    // twttr.widgets.createTimeline(
    //   {
    //     sourceType: 'profile',
    //     screenName: 'ZeeNews'
    //   },
    //   document.getElementById('timeline'),
    //   {
    //     width: '450',
    //     height: '700'
    //   }).then(function (el) {
    //     console.log('Embedded a timeline.')
    //   });
    this.getQuote();
    
  }
count:number=0;
  getQuote(){
    this.newsService.getHoroscopeFeed().subscribe((data) => {
     this.dailyHoroscope=data;
      // this.Aries = this.dailyHoroscope[0];
      // this.Taurus= this.dailyHoroscope[1];
      // this.Gemini= this.dailyHoroscope[2];
      // this.Cancer= this.dailyHoroscope[3];
      // this.Leo= this.dailyHoroscope[4];
      // this.Virgo= this.dailyHoroscope[5];
      // this.Libra= this.dailyHoroscope[6];
      // this.Scorpio= this.dailyHoroscope[7];
      // this.Sagitarius= this.dailyHoroscope[8];
      // this.Capricorn= this.dailyHoroscope[9];
      // this.Aquarius= this.dailyHoroscope[10];
      // this.Pisces= this.dailyHoroscope[11];

      for(let i=0;i<this.dailyHoroscope.length;i++){
       let str=this.dailyHoroscope[i].title;
       if(str.match(/Aries/g)){
        this.Aries = this.dailyHoroscope[i];
       }
       else if(str.match(/Taurus/g)){
        this.Taurus= this.dailyHoroscope[i];
       }
       else if(str.match(/Gemini/g)){
        this.Gemini= this.dailyHoroscope[i];
       }
       else if(str.match(/Cancer/g)){
        this.Cancer= this.dailyHoroscope[i];
       }
       else if(str.match(/Leo/g)){
        this.Leo= this.dailyHoroscope[i];
       }
       else if(str.match(/Virgo/g)){
        this.Virgo= this.dailyHoroscope[i];
       }
       else if(str.match(/Libra/g)){
        this.Libra= this.dailyHoroscope[i];
       }
       else if(str.match(/Scorpio/g)){
        this.Scorpio= this.dailyHoroscope[i];
       }
       else if(str.match(/Sagittarius/g)){
        this.Sagitarius= this.dailyHoroscope[i];
        console.log(this.Sagitarius);
       }
       else if(str.match(/Capricorn/g)){
        this.Capricorn= this.dailyHoroscope[i];
       }
       else if(str.match(/Aquarius/g)){
        this.Aquarius= this.dailyHoroscope[i];
       }
       else if(str.match(/Pisces/g)){
        this.Pisces= this.dailyHoroscope[i];
       }
      }
    })  
    
  }

  presentProfileModal(index:number) {
    
    if(index==0){
      this.zodiacModal = this.modalCtrl.create("HoroscopeModalPage",{horoscope:this.Aries});
    }
    else if(index==1){
      this.zodiacModal = this.modalCtrl.create("HoroscopeModalPage",{horoscope:this.Taurus});
    }
    else if(index==2){
      this.zodiacModal = this.modalCtrl.create("HoroscopeModalPage",{horoscope:this.Gemini});
    }
    else if(index==3){
      this.zodiacModal = this.modalCtrl.create("HoroscopeModalPage",{horoscope:this.Cancer});
    }
    else if(index==4){
      this.zodiacModal = this.modalCtrl.create("HoroscopeModalPage",{horoscope:this.Leo});
    }
    else if(index==5){
      this.zodiacModal = this.modalCtrl.create("HoroscopeModalPage",{horoscope:this.Virgo});
    }
    else if(index==6){
      this.zodiacModal = this.modalCtrl.create("HoroscopeModalPage",{horoscope:this.Libra});
    }
    else if(index==7){
      this.zodiacModal = this.modalCtrl.create("HoroscopeModalPage",{horoscope:this.Scorpio});
    }
    else if(index==8){
      this.zodiacModal = this.modalCtrl.create("HoroscopeModalPage",{horoscope:this.Sagitarius});
    }
    else if(index==9){
      this.zodiacModal = this.modalCtrl.create("HoroscopeModalPage",{horoscope:this.Capricorn});
    }
    else if(index==10){
      this.zodiacModal = this.modalCtrl.create("HoroscopeModalPage",{horoscope:this.Aquarius});
    }
    else if(index==11){
      this.zodiacModal = this.modalCtrl.create("HoroscopeModalPage",{horoscope:this.Pisces});
    }
   
    this.zodiacModal.present();
  }

}
