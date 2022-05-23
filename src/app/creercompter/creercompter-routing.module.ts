import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreercompterPage } from './creercompter.page';

const routes: Routes = [
  {
    path: '',
    component: CreercompterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreercompterPageRoutingModule {}
