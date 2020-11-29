import { APP_ID, Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Post } from './post';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {title: 'felipe' /*  código que era pra ser usado na API através do HTTP, Get e Post, só expandir
  
    ROOT_URL = 'https://swapi.dev/api/';

    title = 'felipe'; 

    posts: Observable<any>;
    newPost: Observable<any>;
    
    constructor(private http: HttpClient){}
        
    getPosts() {
      let headers = new HttpHeaders().set('Authorization', 'auth-token');
      this.posts = this.http.get(this.ROOT_URL + '/posts', { headers })    
    }

    createPost() {
      const data: Post = {          
          oi: "oi"
      } 
      return this.newPost = this.http.post(this.ROOT_URL + '/posts', data)

    }
    */
}