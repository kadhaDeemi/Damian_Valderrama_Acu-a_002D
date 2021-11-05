import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Article } from '../../interfaces/interfaces';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-pagina6',
  templateUrl: './pagina6.page.html',
  styleUrls: ['./pagina6.page.scss'],
})
export class Pagina6Page implements OnInit {

  noticias: Article[] = []

  constructor(private apiService: ApiService,private menuController: MenuController) { }

  ngOnInit() {
    this.apiService.getTopHeadLines().subscribe(resp =>{
      console.log('noticias', resp);

      this.noticias.push(...resp.articles);
    });

  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  option ={

  }

}

