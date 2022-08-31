import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
const API_URL = `http://localhost:8000/contact`;
@Injectable()
export class ContactService {
  constructor(private http: HttpClient) {}

  public getAll() {
    return this.http.get(API_URL).pipe(map((response: any) => response.data));
  }
  public getOne(id: any) {
    return this.http
      .get(`${API_URL}/${id}`)
      .pipe(map((response: any) => response.data));
  }
}
