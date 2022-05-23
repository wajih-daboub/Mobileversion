import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Actualite3Page } from './actualite3.page';

const routes: Routes = [
  {
    path: '',
    component: Actualite3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Actualite3PageRoutingModule {}
