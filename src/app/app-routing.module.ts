import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'creercompter',
    loadChildren: () => import('./creercompter/creercompter.module').then( m => m.CreercompterPageModule)
  },
  {
  path:'sincrire',
  loadChildren: () => import('./sinscrire/sinscrire.module').then( m => m.SinscrirePageModule)
  },
  {
    path: 'acceuil',
    loadChildren: () => import('./acceuil/acceuil.module').then( m => m.AcceuilPageModule)
  },
  {
    path: 'commandes',
    loadChildren: () => import('./commande/commande.module').then( m => m.CommandePageModule)
  },
  {
    path: 'actualite',
    loadChildren: () => import('./actualite/actualite.module').then( m => m.ActualitePageModule)
  },
  {
    path: 'actualite1',
    loadChildren: () => import('./actualite1/actualite1.module').then( m => m.Actualite1PageModule)
  },
  {
    path: 'actualite2',
    loadChildren: () => import('./actualite2/actualite2.module').then( m => m.Actualite2PageModule)
  },
  {
    path: 'actualite3',
    loadChildren: () => import('./actualite3/actualite3.module').then( m => m.Actualite3PageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
