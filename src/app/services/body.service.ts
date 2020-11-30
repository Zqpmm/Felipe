import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Felipe } from '../models/placeholder.model';

@Injectable({
  providedIn: 'root'

})
export class BodyService {
  constructor(private http: HttpClient) { }
  public getFotos():Observable<any>{
     return this.http.get('http://swapi.dev/api/people/1/');
  }
}
