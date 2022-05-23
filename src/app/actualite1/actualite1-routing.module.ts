import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Actualite1Page } from './actualite1.page';

const routes: Routes = [
  {
    path: '',
    component: Actualite1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Actualite1PageRoutingModule {}
