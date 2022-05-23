import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Actualite2PageRoutingModule } from './actualite2-routing.module';

import { Actualite2Page } from './actualite2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Actualite2PageRoutingModule
  ],
  declarations: [Actualite2Page]
})
export class Actualite2PageModule {}
