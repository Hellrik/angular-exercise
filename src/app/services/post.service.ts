import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post, PostComment } from '../types';

const MAIN_LINK = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    const url = `${MAIN_LINK}/posts`;
    return this.http.get<Post[]>(url);
  }

  getPost(id: number): Observable<Post> {
    const url = `${MAIN_LINK}/posts/${id}`;
    return this.http.get<Post>(url);
  }

  getPostComments(id: number): Observable<PostComment[]> {
    const url = `${MAIN_LINK}/posts/${id}/comments`;
    return this.http.get<PostComment[]>(url);
  }
}
