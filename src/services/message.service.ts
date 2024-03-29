import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
const API_URL = `https://kn-three.vercel.app/message`;
@Injectable()
export class MessageService {
  constructor(private http: HttpClient) {}
  public getAll() {
    return this.http
      .get(`${API_URL}`)
      .pipe(map((response: any) => response.data));
  }
  public create(document: {}) {
    return this.http
      .post(API_URL, document)
      .pipe(map((response: any) => response.data));
  }
  public sendOtp(doc: {}) {
    return this.http
      .post(`https://kn-three.vercel.app/send-otp`, { doc: doc })
      .pipe(map((response) => response));
  }
}
