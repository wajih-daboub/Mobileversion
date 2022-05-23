import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Actualite3PageRoutingModule } from './actualite3-routing.module';

import { Actualite3Page } from './actualite3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Actualite3PageRoutingModule
  ],
  declarations: [Actualite3Page]
})
export class Actualite3PageModule {}
