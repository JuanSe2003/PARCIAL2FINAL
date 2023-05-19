import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receta } from './Receta';
import {Environments} from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private apiUrl = Environments.baseUrl + 'recipes';

constructor(private http: HttpClient) { }


getRecetas(): Observable<Receta[]> {
  return this.http.get<Receta[]>(this.apiUrl);
}
}
