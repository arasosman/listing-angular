import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Number} from '../number/number';

@Injectable()
export class NumberService {
  path = 'http://localhost:3000/api/number';

  constructor(private http: HttpClient) {
  }

  getNumbers(): Observable<Number[]> {
    return this.http.get<Number[]>(this.path + '?limit=4');
  }

  addNumber(number: Number): Observable<Number> {
    const options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.post<Number>(this.path, number, options);
  }

  editNumber(number: Number): Observable<Number> {
    const options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.put<Number>(this.path, number, options);
  }
}
