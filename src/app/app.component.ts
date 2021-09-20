import { Component } from '@angular/core';
interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  componentes : Componente[] = [
    {
      icon: 'snow-outline',
      name: 'Tips',
      redirecTo: '/pagina2'
    },
    {
      icon: 'person-outline',
      name: 'Iniciar Sesion',
      redirecTo: '/inicio'
    },
    {
      icon: 'reader-outline',
      name: 'Registrarse',
      redirecTo: '/pagina3'
    },
    
  ];
}
