import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../services/database.service';
@Component({
  selector: 'app-pagina5',
  templateUrl: './pagina5.page.html',
  styleUrls: ['./pagina5.page.scss'],
})
export class Pagina5Page implements OnInit {
  usuario = {
    password: '',
    email: '',
    nombre: ''
  }
  listaDeUsuarios = [];
  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.databaseService.getAll('usuarios').then(firebaseResponse => {
      firebaseResponse.subscribe(listaDeUsuariosRef => {

        this.listaDeUsuarios = listaDeUsuariosRef.map(usuarioRef =>{
          let usuario = usuarioRef.payload.doc.data();
          usuario['id'] = usuarioRef.payload.doc.id;
          return usuario;
        })
        console.log(this.listaDeUsuarios);
      })
    })
  }
  
  CrearUsuario() {
    this.databaseService.create('usuarios', this.usuario).then(res => {
      console.log(res);
    }).catch(err => {
      console.log("error en alta", err);
    });

  }

  eliminar(id){
    this.databaseService.delete('usuarios',id).then(res =>{
      alert("Se elimino con exito")
    }).catch(err =>{
      console.log("ERROR al eliminar ",err);
    });
  }
  modificar(id){  
    this.databaseService.update('usuarios',id,this.usuario).then(res =>{ 
      alert("se modifico el usuario");
    }).catch(err =>{
      console.log("Error al modificar: ", err)
    })
  }

  obtenerPorId(id){ 
    this.databaseService.getById('usuarios',id).then(res =>{
      res.subscribe(docRef =>{
        let usuario=docRef.data();
        usuario['id']=docRef.id;
        console.log(docRef.data())

      })
    })
  }
  Registrar() {
    const { email, password, nombre } = this.usuario;
    this.databaseService.register(email, password, nombre).then(res => {
      console.log("se registro", res)
    });
  }
}
