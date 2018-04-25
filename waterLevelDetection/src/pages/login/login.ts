import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { SessionProvider } from '../../providers/session/session';




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , private session: SessionProvider) {
  }

  login(email,password) {
   // console.log("First Time");
   this.session.setSessionIdentifier(1);
    this.navCtrl.setRoot('TabsPage');

      //this.goToHomePage(); 
   //   console.log("Second Time");
      //this.navCtrl.setRoot('TabsPage');
     
  }
  
  goToHomePage() {
   //this.navCtrl.setRoot('TabsPage');

         this.navCtrl.push(HomePage,{
       });
       }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad LoginPage');
  }

}
