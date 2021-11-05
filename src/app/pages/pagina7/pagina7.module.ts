import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina7PageRoutingModule } from './pagina7-routing.module';

import { Pagina7Page } from './pagina7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina7PageRoutingModule
  ],
  declarations: [Pagina7Page]
})
export class Pagina7PageModule {}
