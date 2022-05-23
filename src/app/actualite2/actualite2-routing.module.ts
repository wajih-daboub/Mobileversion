import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Actualite2Page } from './actualite2.page';

const routes: Routes = [
  {
    path: '',
    component: Actualite2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Actualite2PageRoutingModule {}
