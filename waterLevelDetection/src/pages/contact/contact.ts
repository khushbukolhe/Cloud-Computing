import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { App } from 'ionic-angular/components/app/app'; 

import { SessionProvider } from '../../providers/session/session';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,private session: SessionProvider,private app: App) {

  }
  logoutAll() {
    if (this.session.getSessionIdentifier() == 1) {      
      // console.log("Session Identifier : ", this.session.getSessionIdentifier());
    }

    if (this.session.getSessionIdentifier() == 3) {      
     // console.log("Session Identifier : ", this.session.getSessionIdentifier());
     
    }
    this.app.getRootNav().setRoot(LoginPage);
  }

}
