import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileFetchService {
  private username: string;

  constructor(private http: HttpClient) {
    this.username = 'tsdharshan4';
  }
  getProfile(): Observable<any> {
    const url = 'https://api.github.com/users/' + this.username;
    return this.http.get<any>(url).pipe(map((res) => res));
  }
  refreshProfile(username: string) {
    this.username = username;
  }
}
