import { Component,ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from "@ionic-native/geolocation";
import { FloodDescriptionPage } from '../flood-description/flood-description';




/**
 * Generated class for the FloodAlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-flood-alert',
  templateUrl: 'flood-alert.html',
})

export class FloodAlertPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
mode='DRIVING';

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }


  loadMap(){
   // console.log("Entered init function");
    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    let content = "<p>This is your current position !</p>";

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    //console.log("Entered init function");
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    //console.log("Entered init function");
    infoWindow.open(this.map);
    // console.log("Entered init function");
    // this.map = new google.maps.Map(this.mapElement.nativeElement, {
    //   zoom: 7,
    //   center: {lat: 39.08, lng: -94.58}
      
    // });

    // this.directionsDisplay.setMap(this.map);
    // this.directionsDisplay.setOptions({
    //   polylineOptions: {
    //     strokeColor: 'red'
    //   }
    // });
 
  }


  showAlert1() {
    // let alert = this.alertCtrl.create({
    //   title: 'Descriptions of Alert 1',
    //   subTitle: 'Current Status : ' + 
    //              'Rated : '+
    //              'Last Update : ',
    //   buttons: ['OK']
    // });
    // alert.present();

    this.goToDescriptionPage(); 


  }

  showAlert2() {
    // let alert = this.alertCtrl.create({
    //   title: 'Descriptions of Alert 2',
    //   subTitle: 'Current Status : '+
    //              'Rated : '+
    //              'Last Update : ',
    //   buttons: ['OK']
    // });
    // alert.present();

    this.goToDescriptionPage(); 
  }


  showAlert3() {
    // let alert = this.alertCtrl.create({
    //   title: 'Descriptions of Alert 3',
    //   subTitle: 'Current Status : '+
    //              'Rated : '+
    //              'Last Update : ',
    //   buttons: ['OK']
    // });
    // alert.present();
    this.goToDescriptionPage(); 
  }

  goToDescriptionPage() {
    this.navCtrl.push(FloodDescriptionPage,{
  });
   }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad FloodAlertPage');
    this.loadMap();
  }

}
