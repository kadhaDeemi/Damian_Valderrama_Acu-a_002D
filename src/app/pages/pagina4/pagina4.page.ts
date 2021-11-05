import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../services/database.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.page.html',
  styleUrls: ['./pagina4.page.scss'],
})
export class Pagina4Page implements OnInit {
  usuario = {
    password: '',
    email: '',
  }
userLogged= this.databaseService.getUserLogged();
  constructor(private databaseService: DatabaseService,
    private router: Router) { }

  ngOnInit() {
  }

  Ingresar() {
    const { email, password } = this.usuario;
    this.databaseService.login(email, password).then(res => {
      console.log("se registro", res)
      alert("bienvenido "+ email)
    });
  }
  IngresarConGoogle() {
    console.log(this.usuario);
    const { email, password } = this.usuario;
    this.databaseService.loginWithGoogle(email, password).then(res => {
      console.log("se registro", res);
    });
  }

  ObtenerUsuarioLogeado(){
    this.databaseService.getUserLogged().subscribe(res =>{
      console.log(res?.email); 
    });
  }
  logout(){ 
    this.databaseService.logout();
    alert("Se ha cerrado su sesión")
  }
}
