import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pagina7Page } from './pagina7.page';

const routes: Routes = [
  {
    path: '',
    component: Pagina7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pagina7PageRoutingModule {}
