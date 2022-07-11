import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPersonagem } from '../Personagem';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PersonagensService {
  private apiUrl: string = 'http://127.0.0.1:8000/herois/';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getAll(): Observable<IPersonagem[]> {
    return this.http.get<IPersonagem[]>(this.apiUrl);
  }

  getID(id: string): Observable<IPersonagem> {
    return this.http.get<IPersonagem>(`${this.apiUrl}${id}/`);
  }

  post(data: IPersonagem): Observable<IPersonagem> {
    return this.http.post<IPersonagem>(this.apiUrl, data);
  }

  put(id: string, data: IPersonagem): Observable<IPersonagem> {
    return this.http.put<IPersonagem>(`${this.apiUrl}${id}/`, data);
  }

  delete(id: string): Observable<IPersonagem> {
    return this.http.delete<IPersonagem>(`${this.apiUrl}${id}/`);
  }
}
