import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'pagina2',
    loadChildren: () => import('./pages/pagina2/pagina2.module').then( m => m.Pagina2PageModule)
  },
  {
    path: 'pagina4',
    loadChildren: () => import('./pages/pagina4/pagina4.module').then( m => m.Pagina4PageModule)
  },
    {
    path: 'pagina5',
    loadChildren: () => import('./pages/pagina5/pagina5.module').then( m => m.Pagina5PageModule)
  },
  {
    path: 'pagina6',
    loadChildren: () => import('./pages/pagina6/pagina6.module').then( m => m.Pagina6PageModule)
  },
  {
    path: 'pagina7',
    loadChildren: () => import('./pages/pagina7/pagina7.module').then( m => m.Pagina7PageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
