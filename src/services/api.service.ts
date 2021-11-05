import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../app/interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTopHeadLines()
  {
    return this.http.get<RespuestaToHeadLines>('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=489c6483d489456c811e3d54e4d75468');
  }
}
