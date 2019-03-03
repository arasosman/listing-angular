import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Blog} from '../blog/Blog';
import {Observable} from 'rxjs';


@Injectable()


export class BlogService {
  path = 'http://localhost:3000/api/blog';

  constructor(private http: HttpClient ) {
  }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.path + '?limit=4');
  }

  addBlog(blog: Blog): Observable<Blog> {
    const options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.post<Blog>(this.path, blog, options);
  }
  editBlog(blog: Blog): Observable<Blog> {
    const options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.put<Blog>(this.path, blog, options);
  }
}
