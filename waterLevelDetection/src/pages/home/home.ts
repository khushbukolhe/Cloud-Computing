import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FloodAlertPage } from '../flood-alert/flood-alert';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  floodAlertNavigation() {
   
    
      this.goTofloodAlertPage(); 
     
      //this.navCtrl.setRoot('TabsPage');
     
  }
  
  goTofloodAlertPage() {
         this.navCtrl.push(FloodAlertPage,{
       });
        }

}
