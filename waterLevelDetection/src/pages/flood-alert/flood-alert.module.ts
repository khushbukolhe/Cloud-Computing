import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FloodAlertPage } from './flood-alert';

@NgModule({
  declarations: [
    FloodAlertPage,
  ],
  imports: [
    IonicPageModule.forChild(FloodAlertPage),
  ],
})
export class FloodAlertPageModule {}
