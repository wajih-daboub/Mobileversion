import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Actualite1PageRoutingModule } from './actualite1-routing.module';

import { Actualite1Page } from './actualite1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Actualite1PageRoutingModule
  ],
  declarations: [Actualite1Page]
})
export class Actualite1PageModule {}
