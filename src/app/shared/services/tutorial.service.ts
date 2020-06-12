import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient,
              private api: GlobalService) { }

  // Tutorial API
  private apiTut: String = `${this.api.host}/tutorials`;
  // GET ALL
  getTutorials(): Observable<any> {
    return this.http.get(`${this.apiTut}`);
  }
  // GET BY CATEGORY
  getTutorialsByCategory(category_id): Observable<any> {
    return this.http.get(`${this.apiTut}/categories/${category_id}`);
  }
  // GET BY CONTRACTOR
  getTutorialsByContractor(contractor_id): Observable<any> {
    return this.http.get(`${this.apiTut}/contractors/${contractor_id}`);
  }
  // GET ONE
  getTutorial(tutorial_id): Observable<any> {
    return this.http.get(`${this.apiTut}/${tutorial_id}`);
  }
  // POST
  setTutorial(tutorial): Observable<any> {
    return this.http.post(`${this.apiTut}`, tutorial);
  }
  // PUT
  updateTutorial(tutorial_id, tutorial): Observable<any> {
    return this.http.put(`${this.apiTut}/${tutorial_id}`, tutorial);
  }
  // DELET
  deleteTutorial(tutorial_id): Observable<any> {
    return this.http.delete(`${this.apiTut}/${tutorial_id}`);
  }
  //////////////////////////////////////////////////////////////

  // Tag API
  private apiCategory: String = `${this.api.host}/categories`;
  // GET ALL
  getCategories(): Observable<any> {
    return this.http.get(`${this.apiCategory}`);
  }
  // GET ONE
  getcategory(category_id): Observable<any> {
    return this.http.get(`${this.apiCategory}/${category_id}`);
  }
  // POST
  setcategory(category): Observable<any> {
    return this.http.post(`${this.apiCategory}`, category);
  }
  // PUT
  updatecategory(category_id, category): Observable<any> {
    return this.http.put(`${this.apiCategory}/${category_id}`, category);
  }
  // DELET
  deletecategory(category_id): Observable<any> {
    return this.http.delete(`${this.apiCategory}/${category_id}`);
  }
  //////////////////////////////////////////////////////////////

  // Comment API
  private apiComnt: String = `${this.api.host}/comments`;
  // GET ALL
  getComments(): Observable<any> {
    return this.http.get(`${this.apiComnt}`);
  }
  // GET COMMENTS OF TUTORIAL
  getTutorialComments(tutorial_id): Observable<any> {
    return this.http.get(`${this.apiComnt}/tutorial/${tutorial_id}`);
  }
  // GET ONE
  getUserComment(comment_id): Observable<any> {
    return this.http.get(`${this.apiComnt}/${comment_id}`);
  }
  // POST
  setComment(comment): Observable<any> {
    return this.http.post(`${this.apiComnt}`, comment);
  }
  // PUT
  updateComment(comment_id, comment): Observable<any> {
    return this.http.put(`${this.apiComnt}/${comment_id}`, comment);
  }

  // DELET
  deleteComment(comment_id): Observable<any> {
    return this.http.delete(`${this.apiComnt}/${comment_id}`);
  }
  //////////////////////////////////////////////////////////////

  // Like API
  private apiLike: String = `${this.api.host}/likes`;
  // GET ALL
  getLikes(): Observable<any> {
    return this.http.get(`${this.apiLike}`);
  }
  // GET ONE
  getLike(like_id): Observable<any> {
    return this.http.get(`${this.apiLike}/${like_id}`);
  }
  // POST
  setLike(like): Observable<any> {
    return this.http.post(`${this.apiLike}`, like);
  }
  // PUT
  updateLike(like_id, like): Observable<any> {
    return this.http.put(`${this.apiLike}/${like_id}`, like);
  }
  // DELET
  deleteLike(like_id): Observable<any> {
    return this.http.delete(`${this.apiLike}/${like_id}`);
  }
  //////////////////////////////////////////////////////////////

}
