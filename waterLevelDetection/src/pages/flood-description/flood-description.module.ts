import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FloodDescriptionPage } from './flood-description';

@NgModule({
  declarations: [
    FloodDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(FloodDescriptionPage),
  ],
})
export class FloodDescriptionPageModule {}
