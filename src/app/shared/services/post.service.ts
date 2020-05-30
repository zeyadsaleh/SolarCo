import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postURl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

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
