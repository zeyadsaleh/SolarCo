import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postURl = `${this.api.host}/posts`;

  constructor(private http: HttpClient,
              private api: GlobalService) { }
    

  getPosts():Observable<any> {
    return this.http.get(this.postURl);
  }

  getPost(id):Observable<any> {
    return this.http.get(this.postURl+'/'+id);
  }

  createPost(post):Observable<any> {
    return this.http.post(this.postURl,post);
  }

  updatePost(id,post):Observable<any> {
    return this.http.put(this.postURl+'/'+id,post);
  }

  deletePost(id):Observable<any> {
    return this.http.delete(this.postURl+'/'+id);
  }
}
