import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';
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
  userLogged= this.databaseService.getUserLogged();
  constructor(private databaseService: DatabaseService) {}

  logout(){ 
    this.databaseService.logout();
    alert("Se ha cerrado su sesión con exito")
  }
  ObtenerUsuarioLogeado(){
    this.databaseService.getUserLogged().subscribe(res =>{
      console.log(res?.email); 
    });
  }
  componentes : Componente[] =[
    {
      icon: 'snow-outline',
      name: 'Tips',
      redirecTo: '/pagina2'
    },
    {
      icon: 'person-outline',
      name: 'Iniciar Sesion',
      redirecTo: '/pagina4'
    },
    {
      icon: 'reader-outline',
      name: 'Registrarse',
      redirecTo: '/pagina5'
    },
    {
      icon: 'hand-right-outline',
      name: 'Noticias',
      redirecTo: '/pagina6'
    },
   
  ]


}
