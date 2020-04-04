import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the HoroscopeModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horoscope-modal',
  templateUrl: 'horoscope-modal.html',
})
export class HoroscopeModalPage {
  ZodiacTitle:any;
  zodiacDesc:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
   public viewCtrl:ViewController
  ) {
    this.ZodiacTitle='<h2>'+navParams.get('horoscope').title+'</h2>';
    this.zodiacDesc='<p>'+navParams.get('horoscope').description+'</p>';
    console.log(navParams.get('horoscope').title)
  }

  ionViewDidLoad() {
    


  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
