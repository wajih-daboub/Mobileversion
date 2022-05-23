import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreercompterPageRoutingModule } from './creercompter-routing.module';

import { CreercompterPage } from './creercompter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreercompterPageRoutingModule
  ],
  declarations: [CreercompterPage]
})
export class CreercompterPageModule {}
