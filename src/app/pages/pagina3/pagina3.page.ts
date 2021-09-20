import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {
  usuario = {
    email:'',
    password:'',
    nombre:'',
    genero:'',
    celular:''
  }
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
}
