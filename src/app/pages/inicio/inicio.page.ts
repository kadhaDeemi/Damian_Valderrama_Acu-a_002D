import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes : Componente[] = [
    {
      icon: 'cafe-outline',
      name: 'UWU',
      redirecTo: '/pagina2'
    },
    {
      icon: 'paw-outline',
      name: 'Formulario',
      redirecTo: '/pagina3'
    },
  ];
  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
}
